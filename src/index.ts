import express from 'express';
import { Request,Response } from 'express';
import  connectDB  from  "./db/connection";

// import {DataSource } from 'typeorm';
// import { Sequelize } from 'sequelize';

// const connectDB = new DataSource
// ({
//     type:"mysql",
//     host:"localhost",
//     port:3306,
//     username:"root",
//     password:"shubham2338",
//     database:"demo"
// }).initialize()
// .then(()=>{
//     console.log('db connected');
// })
// .catch((err)=>{
//     console.log('error whilte connecting database',err);
// })


const PORT=3000;
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/Id/:id/Name/:name',(req: Request,resp: Response)=>{
    resp.send({
        message : "hello Shubham",
        data: req.params.id,
        name: req.params.name
    });
})

app.post('/Id/Name',(req: Request, resp: Response)=>{
    resp.send({
        data: req.body,
        prams:{
            id: req.body.id,
            name: req.body.name
        }
    })
    console.log(req.body);
})

app.listen(PORT, ()=>{
        console.log('server is running on port', `${PORT}`);
})