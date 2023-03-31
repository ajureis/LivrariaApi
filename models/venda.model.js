import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Clientes from "./cliente.model.js";
import Livros from "./livro.model.js";

const Venda = db.define(
  "vendas",
  {
    vendaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true }
);

Venda.belongsTo(Clientes, { foreignKey: "clienteId" });
Venda.belongsTo(Livros, { foreignKey: "livroId" });

export default Venda;
