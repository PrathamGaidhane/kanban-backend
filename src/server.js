import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

// ======================
// FIXED CORS (WORKING)
// ======================
app.use(cors({
  origin: [
    "https://kanban-board-gzredilvq-pratham-gaidhanes-projects.vercel.app",
    "https://kanban-board-pratham-gaidhanes-projects.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/tasks", taskRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
