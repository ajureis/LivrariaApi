import express from "express";
import livroController from "../controllers/livro.controller.js";

const router = express.Router();

router.post("/", livroController.createLivro);
router.get("/", livroController.getLivros);
router.get("/info", livroController.getLivrosInfo);
router.get("/:id", livroController.getLivro);
router.delete("/:id", livroController.deleteLivro);
router.put("/", livroController.updateLivro);
router.post("/info", livroController.createLivroInfo);
router.put("/info", livroController.updateLivroInfo);
router.delete("/info/:id", livroController.deleteLivroInfo);
router.post("/avaliacao", livroController.createAvaliacao);
router.delete("/:id/avaliacao/:index", livroController.deleteAvaliacao);

export default router;
