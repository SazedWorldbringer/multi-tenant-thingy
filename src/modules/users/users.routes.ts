import { FastifyInstance } from "fastify";
import { createUserHandler } from "./users.controllers";
import { CreateUserJsonSchema } from "./users.schemas";

export async function userRouter(app: FastifyInstance) {
  app.post("/", { schema: CreateUserJsonSchema }, createUserHandler);
}
