import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import subscribeRouter from "./routes/subscriberRoutes.js";

const app = express();

await connectDB();

//Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

// Example for Node.js with Express
app.use((req, res, next) => {
  // Set the Access-Control-Allow-Origin header to the origin of your frontend
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
  // You might also need to allow specific headers and methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

//routes
app.get("/", (req, res) => res.send("API is working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);
app.use("/api/subscribe", subscribeRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});

export default app;

//Anuraj14
