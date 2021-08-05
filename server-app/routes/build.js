var express = require('express');
var mongoclient = require('mongodb').MongoClient;
var router = express.Router();

router.get('/getallingredients',(req,res,next)=>{
    const url = "mongodb://localhost:27017"
    mongoclient.connect(url,(err,client)=>{
        if(err) throw err;
        const db = client.db("mern");
        const collection = db.collection("ingredients");
        collection.find({}).toArray((err,ingredients)=>{
            res.json(ingredients);
            client.close();
        })
    })
})

module.exports = router;