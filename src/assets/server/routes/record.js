const express = require("express")
import db from "../db/connection.js"

import {ObjectId} from "mongodb";

//Establishing a middleware
const router = express.Router();


//Get all the records from collection
router.get("/", async (res, req) =>{
    let collection = await db.collection("records");
    let results = await db.collection.find({}).toArray();
    res.send(results).status(200);
})

router.get("/:id", (res, req) =>{
    let collection = await db.collection("records");
    let query = {_id: new ObjectId(req.params.id)}
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
})
