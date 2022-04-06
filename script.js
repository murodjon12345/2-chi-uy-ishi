let son = +prompt("Sonni kiriting:")
let daraja = +prompt("Darajani kiriting:")

function computePower(num, exponent) {
    let result = 1;
    for (i = 0; i < exponent; i++) {
        result *= num;
    }
    return result;
} 

alert(computePower(+son, +daraja))