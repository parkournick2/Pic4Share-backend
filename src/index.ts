import app from "./controllers/app";
import albumRouter from "./routers/albumRouter";
import pictureRouter from "./routers/pictureRouter";
import userRouter from "./routers/userRouter";

app.use("/user", userRouter);
app.use("/picture", pictureRouter);
app.use("/album", albumRouter);
