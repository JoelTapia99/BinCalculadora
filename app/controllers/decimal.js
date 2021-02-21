let decimal = num => {
    let numero = num.toString();
    console.log(numero);
    let numeroDecimal = 0;
    let extencion = numero.length;

    for (let i = 0; i < numero.length; i++) {
        let posicion = extencion-1-i;
        let base = 2**i;

        numeroDecimal += numero[posicion]*base;
        
    }

    return numeroDecimal;
}


module.exports = decimal;