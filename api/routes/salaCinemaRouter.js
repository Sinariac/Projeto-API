const { Router } = require("express");

const SalaCinemaController = require("../controllers/SalaCinemaController");

const salaCinemaRouter = Router();

salaCinemaRouter.get("/sala-cinema", SalaCinemaController.pegarSalas);
salaCinemaRouter.get("/sala-cinema/:numero", SalaCinemaController.pegarSalaPorNumero);
salaCinemaRouter.post("/sala-cinema", SalaCinemaController.criarSala);
salaCinemaRouter.put("/sala-cinema/:numero", SalaCinemaController.atualizarSala);
salaCinemaRouter.delete("/sala-cinema/:numero", SalaCinemaController.deletarSala);

module.exports = salaCinemaRouter;