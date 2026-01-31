const express = require("express");

const app = express();
const PORT = 5000 || process.env.BACKEND_URL;

app.get("/", (req, res) => {
  res.send("Watabite Backend is Running ");
});

app.listen(PORT, (error) => {
  if(!error){
    console.log("Server is running")
  }
  else{
    console.log(error);
  }
});
