use("develop");

db.createUser({
  user: "user-develop",
  pwd: "password-develop",
  roles: [
    {
      role: "readWrite",
      db: "develop",
    },
  ],
});

use("test");

db.createUser({
  user: "user-test",
  pwd: "password-test",
  roles: [
    {
      role: "readWrite",
      db: "test",
    },
  ],
});
