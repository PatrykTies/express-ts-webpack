import { Request, Response } from 'express';
import {DataStore} from '../data/data'

export class ToursController{

    public getTours (req: Request, res: Response) {           
      
        res.status(200).send(DataStore.tours)
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


    
