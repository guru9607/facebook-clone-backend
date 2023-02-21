const express = require("express")
const app = express();
const mongoose = require("mongoose") 
const dotenv = require("dotenv") 
const helmet = require("helmet")  
const morgan = require("morgan") 
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

dotenv.config(); 

mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


app.listen(3000, () => {
  console.log("Backed server is running!");
})