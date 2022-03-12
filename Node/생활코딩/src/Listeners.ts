import { RequestListener } from "http";
import * as fs from 'fs';

interface Listens{
    ServListener: RequestListener;
}

const Listeners : Listens ={
    ServListener : (req, res)=>{
        let body;

    }
}

export {Listeners};
