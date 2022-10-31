-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "treinador" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);
