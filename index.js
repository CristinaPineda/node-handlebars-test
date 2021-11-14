const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const itens = [
  {
    id: "0",
    title: 'computador',
    value: 4000.00,
  },
  {
    id: "1",
    title: 'teclado',
    value: 120.00,
  },
  {
    id: "2",
    title: 'mouse',
    value: 90.00,
  },
  {
    id: "3",
    title: 'monitor',
    value: 1000.00,
  },
]

app.get("/", (req, res) => {
  res.render('home', {itens})
})

app.get("/item/:id", (req, res) => {
  const item = itens[req.params.id]
  res.render('item', {item})
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})