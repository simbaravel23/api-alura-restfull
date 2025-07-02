import express from "express";
import autorController from "../controller/autorController.js"

const routes = express.Router();

routes.get("autor",autorController.listarAutores );
routes.get("autor/:id",autorController.listarAutoresPorId );
routes.post("autor",autorController.cadastrarAutores );
routes.put("autor/:id",autorController.atualizarAutores );
routes.delete("autor/:id",autorController.excluirAutor);

export default routes;
