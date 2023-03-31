import livroService from "../services/livro.service.js";

async function createLivro(req, res, next) {
  try {
    let livro = req.body;
    if (!livro.nome || !livro.valor || !livro.autorId) {
      throw new Error("Nome, valor, e autor ID são obrigatórios.");
    }
    livro = await livroService.createLivro(livro);
    res.send(livro);
    logger.info(`POST /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function getLivros(req, res, next) {
  try {
    res.send(await livroService.getLivros(req.query.autorId));
    logger.info("GET /livro");
  } catch (err) {
    next(err);
  }
}

async function getLivro(req, res, next) {
  try {
    res.send(await livroService.getLivro(req.params.id));
    logger.info("GET /livro");
  } catch (err) {
    next(err);
  }
}

async function deleteLivro(req, res, next) {
  try {
    await livroService.deleteLivro(req.params.id);
    res.end();
    logger.info("DELETE /livro");
  } catch (err) {
    next(err);
  }
}

async function updateLivro(req, res, next) {
  try {
    let livro = req.body;
    if (!livro.livroId || !livro.valor) {
      throw new Error("Livro ID e valor tipo são obrigatórios.");
    }
    livro = await livroService.updateLivro(livro);
    res.send(livro);
    logger.info(`PUT /livro - ${JSON.stringify(livro)}`);
  } catch (err) {
    next(err);
  }
}

async function createLivroInfo(req, res, next) {
  try {
    let livroInfo = req.body;
    if (!livroInfo.livroId) {
      throw new Error("Livro ID é obrigatório.");
    }
    await livroService.createLivroInfo(livroInfo);
    res.end();
    logger.info(`POST /livro/info - ${JSON.stringify(livroInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function getLivrosInfo(req, res, next) {
  try {
    res.send(await livroService.getLivrosInfo());
    logger.info("GET /livro/info");
  } catch (err) {
    next(err);
  }
}

async function updateLivroInfo(req, res, next) {
  try {
    let livroInfo = req.body;
    if (!livroInfo.livroId) {
      throw new Error("Livro ID é obrigatório.");
    }
    await livroService.updateLivroInfo(livroInfo);
    res.end();
    logger.info(`PUT /livro/info - ${JSON.stringify(livroInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteLivroInfo(req, res, next) {
  try {
    res.send(await livroService.deleteLivroInfo(parseInt(req.params.id)));
    logger.info("DELETE /livro/info");
  } catch (err) {
    next(err);
  }
}

async function createAvaliacao(req, res, next) {
  try {
    let params = req.body;
    if (!params.livroId || !params.avaliacao) {
      throw new Error("Livro ID e avaliacao são obrigatórios.");
    }
    await livroService.createAvaliacao(params.avaliacao, params.livroId);
    logger.info(`POST /livro/avaliacao`);
    res.end();
  } catch (err) {
    next(err);
  }
}

async function deleteAvaliacao(req, res, next) {
  try {
    await livroService.deleteAvaliacao(req.params.id, req.params.index);
    logger.info(`DELETE /livro/${req.params.id}/avaliacao/${req.params.index}`);
    res.end();
  } catch (err) {
    next(err);
  }
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
