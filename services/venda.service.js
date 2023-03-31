import vendaRepository from "../repositories/venda.repository.js";
import clienteRepository from "../repositories/cliente.repository.js";
import livroRepository from "../repositories/livro.repository.js";

async function createVenda(venda) {
  let error = "";
  const cliente = await clienteRepository.getCliente(venda.clienteId);
  if (!cliente) {
    error += "O cliente id informado não existe.";
  }

  const livro = await livroRepository.getLivro(venda.livroId);
  if (!livro) {
    error += "O livro id informado não existe.";
  } else {
    venda.valor = livro.valor;
  }

  if (error) {
    throw new Error(error);
  }

  if (livro.estoque > 0) {
    venda = await vendaRepository.insertVenda(venda);
    livro.estoque--;
    await livroRepository.updateLivro(livro);
    return venda;
  } else {
    throw new Error("O livro informado não possui estoque.");
  }
}

async function getVendas(clienteId, livroId, autorId) {
  if (clienteId) {
    return await vendaRepository.getVendasByClienteId(clienteId);
  }
  if (livroId) {
    return await vendaRepository.getVendasByLivroId(livroId);
  }
  if (autorId) {
    return await vendaRepository.getVendasByAutorId(autorId);
  }
  return await vendaRepository.getVendas();
}

async function getVenda(id) {
  return await vendaRepository.getVenda(id);
}

export default {
  createVenda,
  getVendas,
  getVenda,
};
