const SalaCinema = require("../models/SalaCinema");
class SalaCinemaController {
  static async pegarSalas(req, res) {
    try {
      const salasCinema = await SalaCinema.findAll();
      return res.status(200).json(salasCinema);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegarSalaPorNumero(req, res) {
    const { numero } = req.params;
    try {
      const salaCinema = await SalaCinema.findByPk(numero);
      return res.status(200).json(salaCinema);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criarSala(req, res) {
    const dados = req.body;
    try {
      const salaCinema = await SalaCinema.create(dados);
      return res.status(200).json(salaCinema);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizarSala(req, res) {
    const { numero } = req.params;
    const dados = req.body;
    try {
      await SalaCinema.update(dados, { where: { numero: Number(numero) } });
      return res.status(200).json(`sala ${numero} atualizada`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async deletarSala(req, res) {
    const { numero } = req.params;

    try {
      await SalaCinema.destroy({ where: { numero: Number(numero) } });
      return res.status(200).json(`sala ${numero} deletada`);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = SalaCinemaController;
