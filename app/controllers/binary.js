const binary = number => {
    let binaryNumber = [];
    while( number > 1 ){
        binaryNumber.push(number % 2);
        number = Math.floor(number / 2);
    }
    binaryNumber.push(number);

    return parseInt(binaryNumber.reverse().join(""));
}

module.exports = binary;

