import express from "express";
import PictureController from "../controllers/PictureController";

const pictureRouter = express.Router();

pictureRouter.post("/create", PictureController.createPicture);
pictureRouter.get("/search", PictureController.searchPicture);

export default pictureRouter;
