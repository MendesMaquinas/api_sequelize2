const { validationResult } = require("express-validator");
const entradaService = require("../services/entrada.service");

const createError = require("http-errors");

const criar = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await entradaService.criar({
      quantidade: req.body.quantidade,
      usuario_id: req.usuario_id,
      preco: req.body.preco,
      item_id: req.body.preco,
    });

    if (response && response.message) {
      throw response;
    }

    res.send(response);
  } catch (err) {
    next(err);
  }
};

const encontrarTodos = async function (req, res, next) {
  try {
    const response = await entradaService.encontrarTodos();
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const encontrarPorId = async function (req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw createError(422, { errors: errors.array() });
    }

    const response = await entradaService.encontrarPorId(req.params.id);
    if (response && response.message) {
      throw response;
    }
    res.send(response);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  criar,
  encontrarTodos,
  encontrarPorId,
};
