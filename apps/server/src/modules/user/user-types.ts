import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

export const UserQuery = {
  users: {
    type: new GraphQLList(UserType),
    args: {
      id: { type: GraphQLID },
    },
  }
};

export const UserMutation = {
  createUser: {
    type: UserType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
  },
  
  updateUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
  },

  deleteUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
  },
};
