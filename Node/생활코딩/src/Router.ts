import * as express from "express";
import {GetMethodUnits} from "./Router/GetRouter";

type RouterInfo = {
    IsGet: boolean;
    IsPost: boolean;
    IsPut: boolean;
    IsDelete: boolean;
}

const GetRouter = ({IsDelete, IsPost, IsPut, IsGet}: RouterInfo)=>{
    const router = express.Router();
    
    if(IsGet) GetMethodUnits.forEach(v=>router.route(v.path).get(v.work));
    return router;
}

export {GetRouter, RouterInfo}