
import {Request, Response, NextFunction} from "express";
import { HomeController } from "../controllers/home.controller";

export class Routes { 
    
    public homeController: HomeController = new HomeController() 
    
    public routes(app: any): void {   
        
        app.route('/')
        .get(this.homeController.getContacts)         
  
        
        // // Contact 
        // app.route('/contact')
        // .get((req: Request, res: Response, next: NextFunction) => {
        //     // middleware
        //     console.log(`Request from: ${req.originalUrl}`);
        //     console.log(`Request type: ${req.method}`);            
        //     if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
        //         res.status(401).send('You shall not pass!');
        //     } else {
        //         next();
        //     }                        
        // }, this.contactController.getContacts)        

        // // POST endpoint
        // .post(this.contactController.addNewContact);

        // // Contact detail
        // app.route('/contact/:contactId')
        // // get specific contact
        // .get(this.contactController.getContactWithID)
        // .put(this.contactController.updateContact)
        // .delete(this.contactController.deleteContact)

    }
}