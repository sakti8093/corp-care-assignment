import express from 'express'
import cors from 'cors'
const app = express();


app.use(express.json());
app.use(cors());

app.get('/line-graph1',(req,res)=>{
    res.send({
        "data":[30,25,32,10,35],
        "label":["Nov 1","Nov 4","Nov 8","Nov 12","Nov 16"]
    })
})

app.get('/bar-graph',(req,res)=>{
    res.send({
        "data1":[20,20,20,20,20,20,20],
        "data2":[30,30,30,30,30,30,30],
        "label":["S","M","T","W","T","F","S"]
    })
})

app.get('/line-graph2',(req,res)=>{
    res.send({
        "data":[30,10,35,15,40],
        "label":["Nov 1","Nov 4","Nov 8","Nov 12","Nov 16"]
    })
})

app.listen('8080',()=>{
    console.log("connection established")
})

