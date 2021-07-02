import app from "./controllers/app";
import { pictureRouter } from "./routers/pictureRouter";
import { userRouter } from "./routers/userRouter";

app.use('/user', userRouter)
app.use('/picture', pictureRouter);