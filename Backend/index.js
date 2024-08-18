import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute  from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json())
const PORT = process.env.PORT || 4000; // Ensure this matches your .env file or desired port
const URI=process.env.MongoDBURI;

try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("connected to mongoDB");
} catch (error) {
    console.log("error : ",error);
}

app.use("/book",bookRoute)
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
 