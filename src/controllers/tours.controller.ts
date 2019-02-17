import { Request, Response } from 'express';
import {DataStore} from '../data/data'

export let getTours = (req: Request, res: Response) => {
  res.json(DataStore)   
}