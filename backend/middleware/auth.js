import jwt from "jsonwebtoken"

const authMiddleware=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try{
        const token_decode=jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId=token_decode.id;
        next();

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})       

    }
    
}

export default authMiddleware;

// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const { token } = req.headers;
//   if (!token) {
//     return res.json({ success: false, message: "Not Authorized. Login Again" });
//   }

//   try {
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId = token_decode.id;
//     next();
//   } catch (error) {
//     // Check if the error is related to token expiration
//     if (error.name === "TokenExpiredError") {
//       return res.json({
//         success: false,
//         message: "Token expired. Please log in again.",
//       });
//     }

//     // For other errors
//     console.log(error);
//     res.json({ success: false, message: "Error processing the token." });
//   }
// };

// export default authMiddleware;
