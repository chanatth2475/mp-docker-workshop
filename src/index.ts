import express from "express";
import cors from "cors";
import { router } from "./routes";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());
app.listen(3000, () => {
  console.log(`Running on Port 3000`);
});

app.use("/api", router);

app.get("/", (req, res) => {
  const parentPath = path.join(__dirname, "..");
  res.sendFile(path.join(parentPath, "web.html"));
});

export default app;
