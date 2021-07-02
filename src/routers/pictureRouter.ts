import express from"express";
import PictureController from "../controllers/PictureController";

export const pictureRouter = express.Router();
const controller = new PictureController();

pictureRouter.post('/create', controller.createPicture);
pictureRouter.get('/all', controller.getAllPictures);