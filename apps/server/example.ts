// const Koa = require('koa');
// const app = new Koa();

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000, () => {
//     console.log('listen: 3000')
// });

import Koa from "koa";
import Router from "@koa/router";
import { graphqlHTTP } from "koa-graphql";

import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Person {
    sumWith(age: Int!): String
  }
  
  type Query {
    mallone: String
    random: Float!
    total(parse: Int!): [Int]
    age(currentAge: Int!): Person
  }
`);

const app = new Koa();
const router = new Router();

const root = {
  total: ({ parse }: { parse: number }) => [500, parse],
  random: () => 0.5,
  mallone: () => "Mallone Aqui",
  age: ({ currentAge }: { currentAge: number }) => ({
    sumWith: ({ age }: { age: number }) => `
      currentAge: ${currentAge} + age: ${age} = ${currentAge + age}
    `,
  }),
};

router.use((ctx, next) => {
  ctx.header
  return next();
})

router.all(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("listen: 3000");
});
