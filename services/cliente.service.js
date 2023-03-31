import clienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente) {
  return await clienteRepository.insertCliente(cliente);
}

async function getClientes() {
  return await clienteRepository.getClientes();
}

async function getCliente(id) {
  return await clienteRepository.getCliente(id);
}

async function deleteCliente(id) {
  const temVendas = await vendaRepository.getVenda(id);
  if (temVendas.length > 0) {
    throw new Error("O cliente não pode ser deletado porque ele possui vendas");
  }
  return await clienteRepository.deleteCliente(id);
}

async function updateCliente(cliente) {
  return await clienteRepository.updateCliente(cliente);
}

export default {
  createCliente,
  getClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
