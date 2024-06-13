import {
    GraphQLObjectType,
    GraphQLSchema,
  } from "graphql";
  
  import { UserQuery, UserMutation } from "../modules/user/user-types";
  
  const QueryType = new GraphQLObjectType({
    name: "Query",
    fields: {
      ...UserQuery,
    },
  });

  const MutationType = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      ...UserMutation,
    },
  });
  
  export const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
  });
  