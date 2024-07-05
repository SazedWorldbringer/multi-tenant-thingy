import fastify, { FastifyInstance } from "fastify";
import { logger } from "./utils/logger";
import { applicationRouter } from "./modules/applications/applications.routes";
import { userRouter } from "./modules/users/users.routes";

export async function buildServer() {
  const app = fastify({
    logger,
  });

  // register plugins

  // register routes
  app.register(applicationRouter, { prefix: "/api/applications" });
  app.register(userRouter, { prefix: "/api/users" });

  return app;
}
