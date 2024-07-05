import fastify, { FastifyInstance } from "fastify";
import { logger } from "./utils/logger";

export async function buildServer() {
  const app = fastify({
    logger,
  });

  // register plugins

  // register routes

  return app;
}
