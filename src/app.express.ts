import * as express from "express";
import * as bodyParser from "body-parser";
import { HomeRoutes, ToursRoutes } from "./gateways";
import * as dotenv from 'dotenv'

// .env file reader
dotenv.config();


class App {

    public app: express.Application;
    public homeRoutes: HomeRoutes = new HomeRoutes();
    public toursRoutes: ToursRoutes = new ToursRoutes();
    // public mongoUrl: string = 'mongodb://localhost/CRMdb';  
    //public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

    constructor() {
        this.app = express();
        this.config();        
        this.homeRoutes.routes(this.app); 
        this.toursRoutes.routes(this.app);     
        //this.mongoSetup();
    }

    private config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.set('env', process.env.DEV || 'development');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true })); //changed from false
        // serving static files 
        this.app.use(express.static('public'));

        // this.app.listen(this.app.get('port'), () => {
        //     console.log(('App is running at http://localhost:%d in %s mode'),
        //       this.app.get('port'), this.app.get('env'));
        //     console.log('Press CTRL-C to stop\n');
        //   });
    }

    // private mongoSetup(): void{
    //     mongoose.Promise = global.Promise;
    //     mongoose.connect(this.mongoUrl);        
    // }

}

export default new App().app;