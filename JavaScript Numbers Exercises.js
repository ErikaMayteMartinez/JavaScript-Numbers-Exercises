//Given three numbers x,y, and z, compute (x^y)%p 
//This is a modular exponentiation

function modularExponentiation(base, exponent, modulus) {
    return Math.pow(base,exponent)% modulus;
}
//try with a larger exponent 
//base: 6x10^77; exponent: 27; modulus: 497 => therefore (6x10^77)^27 is too large
// c % m = (a b) % m
// c % m = [(a % m) (b% m)] % m
// set value = 1, current exponent = 0
// increment current exponent by 1
//set value = (base value) mod modulus until current exponent is reached exponent
function modularExponentiation(base, exponent, modulus) {
    if (modulus == 1) return 0;

    var value = 1;

    for (var i=0; i<exponent; i++) {
        value = (value * base) % modulus;
    }
    return value;
}
//Time Complexity: O(n)
//where n is equal to the exponent value



