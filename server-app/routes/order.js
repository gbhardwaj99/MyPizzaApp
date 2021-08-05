var express = require('express');
var mongoclient = require('mongodb').MongoClient;
var router = express.Router();

router.get('/getallpizzas',(req,res,next)=>{
    const url = "mongodb://localhost:27017"
    mongoclient.connect(url,(err,client)=>{
        if(err) throw err;
        const db = client.db("mern");
        const collection = db.collection("pizzas");
        collection.find({}).toArray((err,pizzas)=>{
            res.json(pizzas);
            client.close();
        })
    })
})

module.exports = router;