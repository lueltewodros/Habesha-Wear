// Sample route handler
export const healthCheck = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "OK", source: "routes/health.js" }));
};
