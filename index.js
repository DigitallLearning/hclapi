const express=require("express")
const cors=require("cors")
const app=express()
require("./mongoose")
app.use(express.json())
app.use(cors())
const studentmodel=require("./studentSchema")

app.post("/",async(req,resp)=>{
    const data=await new studentmodel(req.body)
    const result=await data.save()
    resp.send(result)
})
app.get("/",async(req,resp)=>{
    const result=await studentmodel.find()
    resp.send(result)
})
app.put("/",async(req,resp)=>{
    const result=await studentmodel.updateOne({rollno:req.body.rollno},{$set:{name:req.body.name,marks:req.body.marks}})
    resp.send(result)
})
app.delete("/",async(req,resp)=>{
    const result=await studentmodel.deleteOne({rollno:req.body.rollno})
    resp.send(result)
})
app.listen(5000)