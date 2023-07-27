const express = require("express");
const cookieParser = require("cookie-parser");
const cookieRouter = require("./src/router/cookie/cookie_router");

const app = express();
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(cookieParser());
app.use("/cookie",cookieRouter);


app.listen("3000",()=>{console.log("3000서버 접속")});