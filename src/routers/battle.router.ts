import { Router } from "express";
import battleController from "../controllers/battle.controller.js";

const battleRouter = Router();

battleRouter.post("/:pokemonAId/:pokemonBId", battleController.battle);

export default battleRouter;
