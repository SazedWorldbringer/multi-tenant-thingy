import fastify, { FastifyInstance } from "fastify";
import { logger } from "./utils/logger";
import { applicationRouter } from "./modules/applications/applications.routes";

export async function buildServer() {
  const app = fastify({
    logger,
  });

  // register plugins

  // register routes
  app.register(applicationRouter, { prefix: "/api/applications" });

  return app;
}
