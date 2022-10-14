import { Application } from "./Application";
import { createServer } from "http";
import { IRequest, IResponse } from "./interfaces";

const app = new Application().createApplication()

app.prototype((req:IRequest, res:IResponse, next:any) => {
    console.log("middleware");
    next();
});
const server = createServer(app);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);