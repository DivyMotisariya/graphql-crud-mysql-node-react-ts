import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema";
import { Users } from "./Entities/Users";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "GraphqlCRUD",
    username: "root",
    password: "thinkit",
    host: "localhost",
    logging: true,
    synchronize: false,
    entities: [Users],
    // dropSchema: true,
  });

  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(8000, () =>
    console.log(`Server running at http://localhost:8000`)
  );
};

main().catch((err) => console.log(err));
