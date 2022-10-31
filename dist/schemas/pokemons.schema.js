import Joi from "joi";
export var createPokemonSchema = Joi.object({
    tipo: Joi.string().valid("charizard", "mewtwo", "pikachu").required(),
    treinador: Joi.string().required()
});
export var updatePokemonSchema = Joi.object({
    treinador: Joi.string().required()
});
