import app from "./controllers/app";
import { userRouter } from "./routers/userRouter";

app.use('/user', userRouter)