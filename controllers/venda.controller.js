import vendaService from "../services/venda.service.js";

async function createVenda(req, res, next) {
  try {
    let venda = req.body;
    if (!venda.data || !venda.clienteId || !venda.livroId) {
      throw new Error("Data, cliente ID e livro ID são obrigatórios.");
    }

    const novaVenda = await vendaService.createVenda(venda);
    res.send(novaVenda);
    logger.info(`POST /venda - ${JSON.stringify(venda)}`);
  } catch (err) {
    next(err);
  }
}

async function getVendas(req, res, next) {
  try {
    res.send(
      await vendaService.getVendas(
        req.query.clienteId,
        req.query.livroId,
        req.query.autorId
      )
    );
    logger.info("GET /venda");
  } catch (err) {
    next(err);
  }
}

async function getVenda(req, res, next) {
  try {
    res.send(await vendaService.getVenda(req.params.id));
    logger.info("GET /venda");
  } catch (err) {
    next(err);
  }
}

export default {
  createVenda,
  getVendas,
  getVenda,
};
