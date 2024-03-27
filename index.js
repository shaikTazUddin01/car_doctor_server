const express=require('express')
const cors=require('cors')
const app=express()
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
// port 
const port=process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

// mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.25fgudl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//run server
app.get("/",(req,res)=>{
    res.send("the server is connecting")
})

app.listen(port,()=>{
    console.log("the running port is:",port)
})