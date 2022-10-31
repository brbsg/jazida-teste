import { Router } from "express";
import pokemonsController from "../controllers/pokemons.controller.js";
import { validateSchema } from "../middlewares/validate-schema.middleware.js";
import {
  createPokemonSchema,
  updatePokemonSchema,
} from "../schemas/pokemons.schema.js";

const pokemonsRouter = Router();

pokemonsRouter.get("/", pokemonsController.getAll);

pokemonsRouter.get("/:id", pokemonsController.getOne);

pokemonsRouter.post(
  "/",
  validateSchema(createPokemonSchema),
  pokemonsController.create
);

pokemonsRouter.put(
  "/:id",
  validateSchema(updatePokemonSchema),
  pokemonsController.updateTreinador
);

pokemonsRouter.delete("/:id", pokemonsController.deleteOne);

export default pokemonsRouter;
