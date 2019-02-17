import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./gateways/home.routes";
import * as dotenv from 'dotenv'

// .env file reader
dotenv.config();


class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://localhost/CRMdb';  
    //public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        //this.mongoSetup();
    }

    private config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('env', process.env.DEV || 'development');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true })); //changed from false
        // serving static files 
        this.app.use(express.static('public'));
    }

    // private mongoSetup(): void{
    //     mongoose.Promise = global.Promise;
    //     mongoose.connect(this.mongoUrl);        
    // }

}

export default new App().app;