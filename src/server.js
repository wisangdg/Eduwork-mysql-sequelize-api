import express from "express";
import routes from "./routes/index.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import morgan from "morgan";
morgan;
import sequelize from "../config/database.js";

const app = express();

app.use(express.static("public"));

app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "randomText",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60000 * 60 },
  })
);

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

await sequelize
  .sync()
  .then((result) => {})
  .catch((err) => {
    console.error(err);
  });

// app.get("/api", (req, res) => {
//   connection.query(
//     {
//       sql: "SELECT * FROM products",
//     },
//     (error, result) => {
//       if (error) {
//         res.send({
//           status: "failed",
//           response: "failed to fetch",
//         });
//       } else {
//         res.send({
//           status: "succes",
//           response: result,
//         });
//       }
//     }
//   );
// });
