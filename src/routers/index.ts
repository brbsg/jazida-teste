import { Router } from "express";
import battleRouter from "./battle.router.js";
import pokemonsRouter from "./pokemons.router.js";

const router = Router();

router.use("/pokemons", pokemonsRouter);
router.use("/batalhar", battleRouter);

export default router;
