import express, { Request, Response } from "express";

const app = express();

// Middleware to handle basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

// Set the port to 5000
const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
