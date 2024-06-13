import supertest from "supertest";
import { app } from "../app";

const queryGet = `
query getUser($id: ID) {
  users(id: $id) {
    id
    name
  }
}`;

const mutationCreate = `
mutation createUser($name: String!) {
  createUser(name: $name) {
    name
  }
}`;

const mockUser = {
  name: "mallone",
};

const sendGraphql = (data: object) => {
  return supertest(app.callback()).post("/graphql").send(data);
};

describe("user crud", () => {
  it("should create user", async () => {
    const { body } = await sendGraphql({
      query: mutationCreate,
      variables: mockUser,
    }).expect(200);

    expect(body.data.createUser.name).toBe(mockUser.name);
  });

  it("should show error when create user with empty name", async () => {
    const { body } = await sendGraphql({
      query: mutationCreate,
      variables: {}
    }).expect(400);

    console.log('body.data', body);

    // expect(body.data.createUser.name).toBe(mockUser.name);
  });

  it("should get users", async () => {
    const { body } = await sendGraphql({ query: queryGet }).expect(200);

    expect(body.data.users).toHaveLength(1);
  });

  it("should get users by id", async () => {
    const response = await sendGraphql({ query: queryGet }).expect(200);

    const [user] = response.body.data.users;

    const { body } = await sendGraphql({
      query: queryGet,
      variables: { id: user.id },
    }).expect(200);

    expect(body.data.users[0].id).toBe(user.id);
  });
});
