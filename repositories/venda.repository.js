import Venda from "../models/venda.model.js";
import Clientes from "../models/cliente.model.js";
import Livros from "../models/livro.model.js";
import Autores from "../models/autor.model.js";

async function insertVenda(venda) {
  try {
    return await Venda.create(venda);
  } catch (err) {
    throw err;
  }
}

async function getVendas() {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Clientes,
          attributes: { exclude: ["senha"] },
        },
        {
          model: Livros,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVenda(id) {
  try {
    return await Venda.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getVendasByClienteId(clienteId) {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Clientes,
          where: {
            clienteId,
          },
          attributes: { exclude: ["senha"] },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVendasByLivroId(livroId) {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Livros,
          where: {
            livroId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getVendasByAutorId(autorId) {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Livros,
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

export default {
  insertVenda,
  getVendas,
  getVenda,
  getVendasByClienteId,
  getVendasByLivroId,
  getVendasByAutorId,
};
