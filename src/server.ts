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

const server = app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${port}`);
});

export { server };