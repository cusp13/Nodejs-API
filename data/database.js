import mongoose from "mongoose";

export const connectDB=()=> {
    mongoose.connect("Pprocess.env.MONGO_URI",{
    dbName:"backendapi"
}).then(()=>console.log("Database Connected")).catch((e)=>console.log(e))
};