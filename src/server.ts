import { app, port } from "./app";
import mongoose from "mongoose";

let dbUrl = "";

(process.env.DB_URL)
    ? dbUrl = process.env.DB_URL
    : dbUrl = "mongodb://archarbar:archarbar@techgames-shard-00-00-jy508.azure.mongodb.net:27017,techgames-shard-00-01-jy508.azure.mongodb.net:27017,techgames-shard-00-02-jy508.azure.mongodb.net:27017/test?ssl=true&replicaSet=techgames-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

// static _id: number = 0;
// public id: number;

export interface IArticle extends mongoose.Document {
    
    title: string;
    subtitle: string;
    body: string;
    author: string;
  }
  
  export const ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
  });
  
  const Article = mongoose.model<IArticle>("Article", ArticleSchema);
  export default Article;

const server = app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});

export { server };