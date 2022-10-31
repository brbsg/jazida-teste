import pokemonsRepository from "../repositories/pokemons.repository.js";
import { notFoundError } from "../utils/error-utils.js";

async function battle(idA: number, idB: number) {
  const dbPokemonA = await pokemonsRepository.getOne(idA);
  const dbPokemonB = await pokemonsRepository.getOne(idB);

  if (!dbPokemonA || !dbPokemonB) {
    throw notFoundError("Pokemon não encontrado!");
  }

  const levelA = dbPokemonA.nivel;
  const levelB = dbPokemonB.nivel;
  const probabilityA = levelA / (levelA + levelB);

  const random = Math.random();
  console.log(random);
  if (random < probabilityA) {
    await pokemonsRepository.updateLevel(idA, idB);

    if (dbPokemonB.nivel - 1 === 0) {
      await pokemonsRepository.deleteOne(idB);
    }

    return {
      vencedor: { ...dbPokemonA, nivel: dbPokemonA.nivel + 1 },
      perdedor: { ...dbPokemonB, nivel: dbPokemonB.nivel - 1 },
    };
  } else {
    await pokemonsRepository.updateLevel(idB, idA);

    if (dbPokemonA.nivel - 1 === 0) {
      await pokemonsRepository.deleteOne(idA);
    }

    return {
      vencedor: { ...dbPokemonB, nivel: dbPokemonB.nivel + 1 },
      perdedor: { ...dbPokemonA, nivel: dbPokemonA.nivel - 1 },
    };
  }
}

export default { battle };
