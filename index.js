const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const itemRoute = require("./src/routes/item.route");
const usuarioRoute = require("./src/routes/usuario.route");

const handle404Error = require("./src/middlewares/handle404Error");
const handleError = require("./src/middlewares/handleError");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/itens/", itemRoute);
app.use("/api/usuarios/", usuarioRoute);
app.use(handle404Error);//caso nao encontre nenhuma rota
app.use(handleError);//tem q ser o ultimo

app.listen(process.env.PORT, () => {
  console.log("rodando...");
});
