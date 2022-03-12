import * as express from 'express';

type RoutedUnit = {
    path : string;
    work : express.RequestHandler;
}

var GetMethodUnits : Array<RoutedUnit> = [];

const landingWork : RoutedUnit = {
    path : '/',
    work : (req, res)=>{
        res.send("Hello");
    }
}

GetMethodUnits.push(landingWork);

export {GetMethodUnits}