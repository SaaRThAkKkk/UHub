//require('dotenv').config({path : "./env"})

import mongoose from "mongoose";
export { DB_Name } from "./constants.js";
import express from 'express'
import connectDb from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config();

const app = express()


connectDb();




















/*
code for directly connecting the databsae in the index.js file
this approach is also good but just the fact that it pollutes the codebase and makes it less production level
;(async () =>{
    try {
        await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}`);
        app.on('error',(error =>{
            console.log("Error",error);
            throw error;
        }))

        app.listen(process.env.PORT , () =>{
            console.log(`App is listenintg on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error:",error);
        throw error 
    }
})()
*/