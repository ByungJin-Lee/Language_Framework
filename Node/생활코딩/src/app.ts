import * as Rout from "./Router";
import * as Station from "./Station";
import * as Os from 'os';

//Import cluster from 'cluster' -> throw Error Like 'cluster is undefined'! So i use require...
const cluster = require('cluster')

const routerInfo : Rout.RouterInfo= {
    IsDelete: true,
    IsGet: true,
    IsPost: true,
    IsPut: true
};

const MasterWork = ()=>{
    const numberOfCore = Os.cpus().length;
    
    //Make Slave
    for(let i = 0; i < numberOfCore; i++) cluster.fork();
    //Hire Slave
    cluster.on('exit', ()=>{
        cluster.fork();
        console.log("Slave was dead, Remake Worker!");
    });
}

const SlaveWork = ()=>{
    const app = Station.PreviousAppWork();

    app.use('/', Rout.GetRouter(routerInfo));

    Station.ListenAppWork(app, (port)=>{
        console.log("Run At 127.0.0.1:"+port+`[Worker : ${process.pid}]`);
        setTimeout(()=>{
            process.exit(1);
        }, 1000);
    });
}

console.log(cluster);

if(cluster.isPrimary)
    MasterWork();
else
    SlaveWork();