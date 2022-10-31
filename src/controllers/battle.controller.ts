import { Request, Response } from "express";
import battleService from "../services/battle.service.js";

async function battle(req: Request, res: Response) {
  const pokemonAId = req.params.pokemonAId;
  const pokemonBId = req.params.pokemonBId;

  const dbBattle = await battleService.battle(
    Number(pokemonAId),
    Number(pokemonBId)
  );

  res.send(dbBattle);
}

export default { battle };
