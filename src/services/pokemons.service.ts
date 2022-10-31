import pokemonsRepository from "../repositories/pokemons.repository.js";
import { notFoundError } from "../utils/error-utils.js";

async function create(tipo: string, treinador: string) {
  const dbPokemon = await pokemonsRepository.create({
    tipo,
    treinador,
    nivel: 1,
  });

  return dbPokemon;
}

async function updateTreinador(id: number, treinador: string) {
  try {
    await pokemonsRepository.updateTreinador(id, treinador);
  } catch (error) {
    throw notFoundError("Pokemon não encontrado!");
  }
}

async function deleteOne(id: number) {
  try {
    await pokemonsRepository.deleteOne(id);
  } catch (error) {
    throw notFoundError("Pokemon não encontrado!");
  }
}

async function getOne(id: number) {
  const dbPokemon = await pokemonsRepository.getOne(id);

  if (!dbPokemon) throw notFoundError("Pokemon não encontrado!");

  return dbPokemon;
}

async function getAll() {
  return pokemonsRepository.getAll();
}

export default { create, updateTreinador, deleteOne, getOne, getAll };
