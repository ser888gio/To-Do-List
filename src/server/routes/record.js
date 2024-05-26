// eslint-disable-next-line no-undef
const express = require("express")
import db from "../db/connection.js"

import {ObjectId} from "mongodb";

//Establishing a middleware
const router = express.Router();


//Get all the records from collection
router.get("/", async (res, req) =>{
    let collection = await db.collection("records");
    //find all entities in collection and group them into an array
    let results = await db.collection.find({}).toArray();
    res.send(results).status(200);
})

router.get("/:id", async (res, req) => {
    let collection = await db.collection("records");
    let query = {_id: new ObjectId(req.params.id)}
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})


//Adding a new record
router.post("/", async (res, req) =>{
    try {
        //creating a new object document
        const newDocument = {
            name: req.body.name,
            desc: req.body.desc,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument)
        res.send(result).status(204)
    }
    catch (err){
        console.error(err)
        res.stats(500).send("Error adding record")
    }
})

router.post("/:id", async (res, req) =>{
    try {
        const query = {_id: new ObjectId(req.params.id)}
        //creating a new object document
        const updates = {
            $set: {
                name : req.body.name,
                desc : req.body.desc,
            },
        }
        let collection = await db.collection("records");
        let result = await collection.updateOne(query, updates)
        res.send(result).status(204)
    }
    catch (err){
        console.error(err)
        res.stats(500).send("Error updating record")
    }
})