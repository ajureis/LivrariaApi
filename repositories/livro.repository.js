import Autores from "../models/autor.model.js";
import Livro from "../models/livro.model.js";

async function insertLivro(cliente) {
  try {
    return await Livro.create(cliente);
  } catch (err) {
    throw err;
  }
}

async function getLivros() {
  try {
    return await Livro.findAll({
      include: [
        {
          model: Autores,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getLivro(id) {
  try {
    return await Livro.findByPk(id, { raw: true });
  } catch (err) {
    throw err;
  }
}

async function getLivroByAutorId(autorId) {
  try {
    return await Livro.findAll({
      include: [
        {
          model: Autores,
          where: {
            autorId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function deleteLivro(id) {
  try {
    await Livro.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateLivro(livro) {
  try {
    await Livro.update(livro, {
      where: {
        livroId: livro.livroId,
      },
    });
    return await getLivro(livro.livroId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertLivro,
  getLivros,
  getLivro,
  getLivroByAutorId,
  updateLivro,
  deleteLivro,
};
