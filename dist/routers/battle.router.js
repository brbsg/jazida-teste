import { Router } from "express";
import battleController from "../controllers/battle.controller.js";
var battleRouter = Router();
battleRouter.post("/:pokemonAId/:pokemonBId", battleController.battle);
export default battleRouter;
