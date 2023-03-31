import livroRepository from "../repositories/livro.repository.js";
import livroInfoRepository from "../repositories/livroInfo.repository.js";

async function createLivro(livro) {
  return await livroRepository.insertLivro(livro);
}

async function getLivros(autorId) {
  if (autorId) {
    return await livroRepository.getLivroByAutorId(autorId);
  }
  return await livroRepository.getLivros();
}

async function getLivro(id) {
  const livro = await livroRepository.getLivro(id);
  livro.info = await livroInfoRepository.getLivroInfo(parseInt(id));
  return livro;
}

async function deleteLivro(id) {
  const temVendas = await vendaRepository.getVenda(id);
  if (temVendas.length > 0) {
    throw new Error("O livro não pode ser deletado porque ele possui vendas");
  }
  return await livroRepository.deleteLivro(id);
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

async function createLivroInfo(livroInfo) {
  await livroInfoRepository.createLivroInfo(livroInfo);
}

async function getLivrosInfo() {
  return await livroInfoRepository.getLivrosInfo();
}

async function updateLivroInfo(livroInfo) {
  await livroInfoRepository.updateLivroInfo(livroInfo);
}

async function deleteLivroInfo(livroInfo) {
  await livroInfoRepository.deleteLivroInfo(livroInfo);
}

async function createAvaliacao(avalicao, livroInfo) {
  await livroInfoRepository.createAvaliacao(avalicao, livroInfo);
}

async function deleteAvaliacao(livroId, index) {
  await livroInfoRepository.deleteAvaliacao(parseInt(livroId), index);
}

export default {
  createLivro,
  getLivros,
  getLivro,
  deleteLivro,
  updateLivro,
  createLivroInfo,
  getLivrosInfo,
  updateLivroInfo,
  deleteLivroInfo,
  createAvaliacao,
  deleteAvaliacao,
};
