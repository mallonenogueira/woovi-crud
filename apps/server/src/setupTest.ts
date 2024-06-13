import mongoose from "mongoose";

mongoose.Promise = Promise;
const url = "mongodb://localhost:27017/test";

const config = {
  db: {
    url: "mongodb://localhost:27017/test",
    options: {
      user: "user-test",
      pass: "password-test",
      // reconnectTries: Number.MAX_VALUE,
      // reconnectInterval: 1000,
    },
  },
  connection: null,
};

function connect() {
  return new Promise((resolve, reject) => {
    if (config.connection) {
      return resolve(1);
    }

    mongoose.connect(config.db.url, config.db.options);

    config.connection = mongoose.connection;

    config.connection
      .once("open", () => resolve(1))
      .on("error", (e) => {
        if (e.message.code === "ETIMEDOUT") {
          console.log(e);

          mongoose.connect(config.db.url, config.db.options);
        }

        console.log(e);
        reject(e);
      });
  });
}

async function clearDatabase() {
  const collections = await mongoose.connection.db.collections();

  for (const collection of collections) {
    await collection.deleteMany({});
  }
}

beforeAll(async () => {
  await connect();
  await clearDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
});
