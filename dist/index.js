"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const host = process.env.host;
const port = process.env.port;
console.log(host);
console.log(port);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3000, () => {
    console.log(`Running on Port 3000`);
});
app.use("/api", routes_1.router);
app.get("/", (req, res) => {
    const parentPath = path_1.default.join(__dirname, "..");
    res.sendFile(path_1.default.join(parentPath, "web.html"));
});
exports.default = app;
