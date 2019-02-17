
import * as pkg from '../../package.json'
import { Request, Response } from 'express';

// export let index = (req: Request, res: Response) => {
//   res.json({
//     message: 'Welcome to API sekeleton.',
//     version: pkg.version,
//   });
// }


export class HomeController{

    public getContacts (req: Request, res: Response) {           
      
        res.json({
            message: 'Welcome to API sekeleton.',
            version: pkg.version,
        });

        // res.status(200).send({
        //     message: 'Welcome to API sekeleton.',
        //     version: pkg.version,
        // });
    }
}

    // public addNewContact (req: Request, res: Response) {                
    //     let newContact = new Contact(req.body);
    
    //     newContact.save((err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }    
    //         res.json(contact);
    //     });
    // }

    // public getContacts (req: Request, res: Response) {           
    //     Contact.find({}, (err, contact) => {
    //         if(err){
    //             res.send(err);
    //         }
    //         res.json(contact);
    //     });
    // }


    
