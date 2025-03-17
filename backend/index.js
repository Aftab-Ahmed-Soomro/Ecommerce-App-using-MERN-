// To run this on CLI enter cmdline ---> npm run start
// console.log("Aftab Bhai");

const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("dotenv").config();
const connectDB = require("./config/db");
const router = require('./routes');

const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL || "https://ecommerce-app-using-mern-c8q9.vercel.app/",
    credentials : true
}));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

app.use("/api",router);

const PORT = process.env.PORT || 8080;  

// 1st Approach (easy)

// connectDB();

// app.listen(PORT,()=> {
//     console.log("Server is running at : " , PORT);
// })

// 2nd Approach
connectDB().then(()=> {
    app.listen(PORT, ()=> {
        console.log("DB connected");
        console.log("Server is running at : ",PORT);
    })
})