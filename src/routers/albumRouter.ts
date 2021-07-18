import express from "express";
import AlbumController from "../controllers/AlbumController";

export const albumRouter = express.Router();

albumRouter.get("/all", AlbumController.getAlbuns);

export default albumRouter;