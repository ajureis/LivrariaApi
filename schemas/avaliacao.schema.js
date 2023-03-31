import mongoose from "mongoose";

const AvaliacaoSchema = new mongoose.Schema(
  {
    nome: String,
    nota: Number,
    avaliacao: String,
  },
  { collection: "avaliacoes" }
);

export default AvaliacaoSchema;
