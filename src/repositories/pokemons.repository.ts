import { prisma } from "../config/database.js";
import { CreatePokemonType } from "../types/pokemon.type.js";

async function create(input: CreatePokemonType) {
  return prisma.pokemon.create({
    data: { ...input },
  });
}

async function updateTreinador(id: number, treinador: string) {
  return prisma.pokemon.update({
    where: { id },
    data: { treinador },
  });
}

async function updateLevel(idA: number, idB: number) {
  return prisma.$transaction([
    prisma.pokemon.update({
      where: { id: idA },
      data: { nivel: { increment: 1 } },
    }),
    prisma.pokemon.update({
      where: { id: idB },
      data: { nivel: { decrement: 1 } },
    }),
  ]);
}

async function deleteOne(id: number) {
  return prisma.pokemon.delete({
    where: { id },
  });
}

async function getOne(id: number) {
  return prisma.pokemon.findFirst({
    where: { id },
  });
}

async function getAll() {
  return prisma.pokemon.findMany({});
}

export default {
  create,
  updateTreinador,
  updateLevel,
  deleteOne,
  getOne,
  getAll,
};
