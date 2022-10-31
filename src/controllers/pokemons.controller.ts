import { Request, Response } from "express";
import pokemonsService from "../services/pokemons.service.js";

async function create(req: Request, res: Response) {
  const { tipo, treinador } = req.body as { tipo: string; treinador: string };

  const dbPokemon = await pokemonsService.create(tipo, treinador);

  res.send(dbPokemon);
}

async function updateTreinador(req: Request, res: Response) {
  const { treinador } = req.body as { treinador: string };
  const id = req.params.id;

  await pokemonsService.updateTreinador(Number(id), treinador);

  res.sendStatus(204);
}

async function deleteOne(req: Request, res: Response) {
  const id = req.params.id;

  await pokemonsService.deleteOne(Number(id));

  res.sendStatus(204);
}

async function getOne(req: Request, res: Response) {
  const id = req.params.id;

  const dbPokemon = await pokemonsService.getOne(Number(id));

  res.send(dbPokemon);
}

async function getAll(req: Request, res: Response) {
  const dbPokemons = await pokemonsService.getAll();

  res.send(dbPokemons);
}

export default { create, updateTreinador, deleteOne, getOne, getAll };
