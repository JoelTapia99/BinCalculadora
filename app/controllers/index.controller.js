const calculateDecimal = require("./decimal");
const calculatebinary = require("./binary");

let items = [];
let isDataValidate = Boolean;

const home = (req, res) => {
  res.render("home", { list: items, isValidate: isDataValidate });
  isDataValidate = false;
};

const calcularBinario = (req, res) => {
  let response = req.body.numeroBinario;
  let expression = /[a-zA-Z]/g;

  if (!expression.test(response)) {
    let myBinary = calculatebinary(response);

    items.push({
      ingresado: response,
      convertido: myBinary,
    });

    res.redirect("/");
  } else {
    isDataValidate = true;
    res.redirect("/");
  }
};

const calcularDecimal = (req, res) => {
  let response = req.body.numeroDecimal;
  let expression = /[a-zA-Z]/g;

  if (!expression.test(response)) {
    if (ValidateBinary(response)) {
      let myDecimal = calculateDecimal(response);

      items.push({
        ingresado: response,
        convertido: myDecimal,
      });

      res.redirect("/");
    } else {
      isDataValidate = true;
      res.redirect("/");
    }
  } else {
    isDataValidate = true;
    res.redirect("/");
  }
};

function ValidateBinary(num) {
  let isbinary = Boolean;
  let cadena = num.toString(num);

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] == "0" || cadena[i] == "1") {
      isbinary = true;
    } else {
      isbinary = false;
      break;
    }
  }

  return isbinary;
}

module.exports = {
  home,
  calcularBinario,
  calcularDecimal,
};
