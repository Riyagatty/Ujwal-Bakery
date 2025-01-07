import mongoose from "mongoose";
export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://riyagatty26:nu45LDBNlWBTsZ5i@ujwalbakery.6bjkk.mongodb.net/Ujwal-Bakery').then(()=>console.log("DB Connected"))
}