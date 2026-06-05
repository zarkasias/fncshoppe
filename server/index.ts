import app from "./app.js";

const PORT = Number(process.env.PORT) || 3001;

const server = app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
  console.log("  GET /api/health");
  console.log("  GET /api/products");
  console.log("  GET /api/products/:id");
  console.log("  GET /api/etsy");
});

function shutdown(signal: string) {
  console.log(`\n${signal} received, shutting down API server...`);

  if ("closeAllConnections" in server && typeof server.closeAllConnections === "function") {
    server.closeAllConnections();
  }

  server.close((error) => {
    if (error) {
      console.error("Error closing server:", error);
      process.exit(1);
    }
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forced shutdown after timeout");
    process.exit(1);
  }, 2000).unref();
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
