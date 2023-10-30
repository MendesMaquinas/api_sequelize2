const { Entrada, Item, Usuario, Fornecedor} = require("../database/models/index");

const criar = async function (entrada) {
  const entradaCriada = await Entrada.create(entrada);
  return entradaCriada;
};

const encontrarTodos = async function () {
  const entradas = await Entrada.findAll({
    include: [
      {
        model: Item,
        as: "item",
      },
      {
        model: Usuario,
        as: "usuario",
      }, {
        model: Fornecedor,
        as
      },
    ],
  });
  return entradas;
};

const encontrarPorId = async function (id) {
  const entrada = await Entrada.findByPk(id);
  return entrada;
};

const encontrarPorWhere = async function (where) {
  const entrada = await Entrada.findOne({
    where: where,

    include: [
      {
        model: Item,
        as: "item",
      },
      {
        model: Usuario,
        as: "usuario",
      },
    ],
  });
  return entrada;
};

module.exports = {
  criar,
  encontrarTodos,
  encontrarPorId,
  encontrarPorWhere,
};
