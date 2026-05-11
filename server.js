// // console.log("hello my name is shekh khwaja ");
// //creating a our first server 
// // const http=require("http");--->it is made when there is common js module system
// // import http from "http"; //-->it is made when there is es6 module system
// // const server=http.createServer((req,res)=>{
// //     // res.end("hello this is my first server");
// //     res.end("welcome to my first server");
// // })
// // server.listen(5000,()=>{
// //     console.log("server is running at port 5000");
// // })
// //////////////////////////
// ///ROUTING/////////
// import { log } from "console";
// import http from "http";
// const port=5000;
// const server=http.createServer((req,res)=>{
// //   console.log(req.url);
// //   res.end("hello")
// if(req.url=='/') // / nhi bhi likhoge toh bhi home pe jayega by default
// {
//     res.end("welcome to home page");
// }
// else if(req.url=='/about')
// {
//     res.end("Welcome to about page")

// }
// else if(req.url=='/contacts')
// {
//     res.end("Welcome to contact page")
// }
// else
// {
//     res.end(" 404 page not found");
// }
// })
// server.listen(port,()=>{
//      console.log("server running on port 5000");
     
// })
///EXPRESS////
import express from "express"
const app=express()
const port=5000
// app.[http method]("route",callback)
app.get("/",(req,res)=>{
    // res.send("Hello")
    res.send("<h1>shekh khwaja is a smart boy </h1>")
})
app.get("/about",(req,res)=>{
    res.send("aagay about pe ")
})
app.get("/contact",(req,res)=>{
    res.send("koi contact nhi hai bhai ")
})
app.get("/shop",(req,res)=>{
    res.send("bakchodi mt kr l*****")
})
app.listen(port,()=>{
  console.log(`server is started at ${port}`);
  
})
