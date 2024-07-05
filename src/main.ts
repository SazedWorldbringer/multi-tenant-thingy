import { migrate } from "drizzle-orm/node-postgres/migrator";
import { buildServer } from "./server";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import { db } from "./db";

async function gracefulShutdown({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) {
  await app.close();
}

async function main() {
  const app = await buildServer();

  await app.listen({
    port: env.PORT,
    host: env.HOST,
  });

  await migrate(db, {
    migrationsFolder: "./migrations",
  });

  logger.debug(env, "from env");

  const signals = ["SIGINT", "SIGTERM"];
  for (const signal of signals) {
    process.on(signal, () => {
      console.log("got signal", signal);
      gracefulShutdown({ app });
    });
  }
}
main();
