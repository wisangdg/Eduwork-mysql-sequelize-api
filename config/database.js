import { Sequelize } from "sequelize";

const sequelize = new Sequelize("eduwork-cruds", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

try {
  await sequelize.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
