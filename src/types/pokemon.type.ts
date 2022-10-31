import { Pokemon } from "@prisma/client";

export type CreatePokemonType = Omit<Pokemon, "id">;
