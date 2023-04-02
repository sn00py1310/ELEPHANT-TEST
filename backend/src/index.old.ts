import { AppDataSource } from "./data-source"
import { Calendar, SimpleReplacement } from "./entity/Calendar"
import express  from "express";

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const cal = new Calendar()
    // cal.url = new URL("https://google.com")

    // const replacement: SimpleReplacement = {
    //     mode: "globalRegex",
    //     matcher: new RegExp("edf").toString(),
    //     replacement: "xyz"
    // }
    // cal.settings = { "replacements": [replacement]}
    // await AppDataSource.manager.save(cal)
    // console.log("Saved a new user with id: " + cal.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(Calendar)
    // console.log("Loaded users: ", users)
    // const someUser = await AppDataSource
    //     .getRepository(Calendar)
    //     .createQueryBuilder("calendar")
    //     .where("calendar.id = :id", {id: "c464a4b5-38cb-49e0-8dd5-5443c08e581b"})
    //     .getOne();

    // console.log(someUser);

    // console.log("Here you can setup and run express / fastify / any other framework.")


    const app = express();
    app.get("/", (req: express.request, res: express.response) => {
        res.send("ABC")
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`App listening on port ${port}`));

}).catch(error => console.log(error))
