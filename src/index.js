//require('dotenv').config({path: './env'})

import 'dotenv/config'

//import mongoose from 'mongoose'

//import { DB_NAME } from "./constants"

import connectDB from './db/index.js'

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
    app.on("error", (error) => {
        console.log("Can not listen to the app", error);
        throw error
    })
})
.catch((err) => {
    console.log("MONGODB connection failed!!", err)
})














/*
import express from 'express'

const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        app.on("error", (error) => {
            console.log("Can not listen to the app", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log('App is listening on port ${process.env.PORT}');
        })
    } catch (error){
        console.error("ERROR: ", error)
        throw err
    }
})()
*/