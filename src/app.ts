import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { Application, Request, Response } from "express";
import * as articleController from "./controller/articleController";

dotenv.config();

const app: Application = express();
const port = process.env.SERVER_PORT || 3000;
const oidc = app.locals.oidc;

app.use(bodyParser.json());
app.use(cors());


if (port == "") {
    // tslint:disable-next-line:no-console
    console.log("Missing environment variables for configuration (check .env.example and create a .env)")
    process.exit(1);
}

// status
app.get("/", (req: Request, res: Response) => {
    res.status(500).send("Hello World!");
} );

// status
app.get("/status", (req: Request, res: Response) => {
    res.status(500).send({
        "status": "Up"
    } );
} );

app.get("/articles", articleController.allArticles);
app.get("/articles/{id}", articleController.getArticle);
app.post("/articles", articleController.addArticle);
app.put("/articles/:id", articleController.updateArticle);
app.delete("/articles/:id", articleController.deleteArticle);


// app.use((req: Request, res: Response) => {
//     res.status(500).send({
//         status: 500,
//         message: "Not Implemented"
//     });
// });

export { app, port }
