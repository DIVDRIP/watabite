import express from "express"
import { admin, userLogin, userSignup } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register",userSignup)
userRouter.post("/login",userLogin)
userRouter.post("/admin",admin)

export default userRouter