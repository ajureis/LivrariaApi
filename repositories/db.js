import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://erkefutt:L04XkEHoy38bM4JZzExPjgCL0_cCfXKu@ruby.db.elephantsql.com/erkefutt",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
