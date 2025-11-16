import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import serveStatic from "serve-static";

import notesRoutes from "./routes/notesRoutes.js";
import cropRoutes from "./routes/cropRoutes.js";
import equipmentRoutes from "./routes/equipmentsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import refreshRoutes from "./routes/refreshRoutes.js";

import { connectDB } from "./config/db.js";
import corsOptions from "./config/corsOptions.js";
import credentials from "./middleware/credentials.js";
import verifyJWT from "./middleware/verifyJWT.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(credentials);


if (process.env.NODE_ENV !== "production") {
    app.use(cors(corsOptions));
}


app.use("/api/users", userRoutes);
app.use("/api/refresh", refreshRoutes);
app.use("/api/notes", notesRoutes);


app.use("/api/crops", verifyJWT, cropRoutes);
app.use("/api/equipments", verifyJWT, equipmentRoutes);


app.use(
    serveStatic(path.join(__dirname, "../frontend/dist"), {
        index: ["index.html"],
        maxAge: "1d",
        setHeaders: (res, path) => {
            if (path.endsWith(".html")) {
                res.setHeader("Cache-Control", "no-cache");
            }
        }
    })
);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("🚀 Server running on port", PORT);
    });
});
