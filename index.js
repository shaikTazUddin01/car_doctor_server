const express=require('express')
const cors=require('cors')
const app=express()

// port 
const port=process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

//run server
app.get("/",(req,res)=>{
    res.send("the server is connecting")
})

app.listen(port,()=>{
    console.log("the running port is:",port)
})