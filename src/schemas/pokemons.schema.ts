import Joi from "joi";

export const createPokemonSchema = Joi.object({
  tipo: Joi.string().valid("charizard", "mewtwo", "pikachu").required(),
  treinador: Joi.string().required(),
});

export const updatePokemonSchema = Joi.object({
  treinador: Joi.string().required(),
});
