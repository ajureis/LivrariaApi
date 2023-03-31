import LivroInfoSchema from "../schemas/livroInfo.schema.js";
import { connect } from "./mongo.db.js";

async function createLivroInfo(livroInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("livroInfo", LivroInfoSchema);
    livroInfo = new LivroInfo(livroInfo);
    await livroInfo.save();
  } catch (err) {
    throw err;
  }
}

async function updateLivroInfo(livroInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    await LivroInfo.findOneAndUpdate({ livroId: livroInfo.livroId }, livroInfo);
  } catch (err) {
    throw err;
  }
}

async function getLivroInfo(livroId) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    const query = LivroInfo.findOne({ livroId });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function getLivrosInfo() {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    const query = LivroInfo.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function deleteLivroInfo(livroId) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    await LivroInfo.deleteOne({ livroId });
  } catch (err) {
    throw err;
  }
}

async function createReview(review, livroId) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.reviews.push(review);
    await updateLivroInfo(livroInfo);
  } catch (err) {
    throw err;
  }
}

async function deleteReview(livroId, index) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.reviews.splice(index, 1);
    await updateLivroInfo(livroInfo);
  } catch (err) {
    throw err;
  }
}

async function createAvaliacao(avaliacao, livroId) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.avaliacoes.push(avaliacao);
    await updateLivroInfo(livroInfo);
  } catch (err) {
    throw err;
  }
}

async function deleteAvaliacao(livroId, index) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.avaliacoes.splice(index, 1);
    await updateLivroInfo(livroInfo);
  } catch (err) {
    throw err;
  }
}

export default {
  createLivroInfo,
  updateLivroInfo,
  getLivroInfo,
  getLivrosInfo,
  deleteLivroInfo,
  createReview,
  deleteReview,
  createAvaliacao,
  deleteAvaliacao,
};
