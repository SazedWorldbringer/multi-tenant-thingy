import { FastifyInstance } from "fastify";
import { createApplicationHandler } from "./applications.controllers";
import { CreateApplicationJsonSchema } from "./applications.schemas";

export async function applicationRouter(app: FastifyInstance) {
  app.post(
    "/",
    { schema: CreateApplicationJsonSchema },
    createApplicationHandler,
  );

  app.get("/", () => {});
}
