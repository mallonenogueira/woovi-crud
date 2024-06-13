import Router from "@koa/router";
import { graphqlHTTP } from "koa-graphql";
import koaPlaygroundMiddleware from "graphql-playground-middleware-koa";

import { schema } from "./graphql/schema";
import { rootValue } from "./graphql/resolvers";

const router = new Router();

router.use("/graphql", (ctx, next) => {
  if (ctx.header.authorization) {
    console.log(ctx.header.authorization);
  }

  return next();
});

router.all(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
  })
);

router.all("/playground", koaPlaygroundMiddleware({ endpoint: "/graphql" }));

export { router };
