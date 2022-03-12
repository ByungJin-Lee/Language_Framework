import * as express from "express"

const PORT = 8080;

const PreviousAppWork = () : express.Application =>{
    var app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    return app;
}

const ListenAppWork = (app : express.Application, afterWork : (port : number)=>void = (PORT)=>console.log("Run At "+ PORT)) =>{
    app.listen(PORT, ()=>afterWork(PORT));
}

export {PreviousAppWork, ListenAppWork};