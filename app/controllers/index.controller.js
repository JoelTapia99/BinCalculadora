const calculateDecimal = require('./decimal')
const calculatebinary = require('./binary')

let items = [];

const home = (req, res) => {
  res.render("home", { list: items });
};

const calcularBinario = (req, res) => {
  let number = req.body.numeroBinario;
  let myBinary = calculatebinary(number);
  
  items.push({
    ingresado: number,
    convertido: myBinary,
  });
  
  res.redirect("/");
};

const calcularDecimal = (req, res) => {
  let decimal = req.body.numeroDecimal;
  let myDecimal = calculateDecimal(decimal);
  console.log(myDecimal);

  items.push({
    ingresado: decimal,
    convertido: myDecimal,
  });
  
  res.redirect("/");
};

module.exports = {
  home,
  calcularBinario,
  calcularDecimal
};
