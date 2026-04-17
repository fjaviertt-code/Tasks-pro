const express=require("express");
const app=express();
app.use(express.static("public"));
app.get("/api/health",(req,res)=>res.send("ok"));
app.listen(process.env.PORT||3000);
