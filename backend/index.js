import express from "express";
import cors from "cors";
import "dotenv/config"
import connectDb from "./config/mongoDb.js";
import userRouter from "./routers/userRouter.js";


// app config
const app = express();
const port = process.env.PORT || 4000;
connectDb();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("Watabite Backend is Running ");
});
app.use("/api/user",userRouter)

app.listen(port, (error) => {
  if(!error){
    console.log("Server is running on Port:" +port)
  }
  else{
    console.log(error);
  }
});
