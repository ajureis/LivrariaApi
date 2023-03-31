import autorRepository from "../repositories/autor.repository.js";

async function createAutor(autor) {
  return await autorRepository.insertAutor(autor);
}

async function getAutores() {
  return await autorRepository.getAutores();
}

async function getAutor(id) {
  return await autorRepository.getAutor(id);
}

async function deleteAutor(id) {
  const temLivros = await livroRepository.getLivro(id);
  if (temLivros.length > 0) {
    throw new Error("O autor não pode ser deletado porque ele possui livros");
  }
  return await autorRepository.deleteAutor(id);
}

async function updateAutor(autor) {
  return await autorRepository.updateAutor(autor);
}

export default {
  createAutor,
  getAutores,
  getAutor,
  deleteAutor,
  updateAutor,
};
