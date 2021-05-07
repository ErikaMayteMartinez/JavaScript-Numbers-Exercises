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



//print all primes less than n
function allPrimeLessThanN(n) {
    for (var i=0; i<n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
function isPrime(n) {
    if(n <= 1) return false;
    if (n <= 3) return true;
    //This is checked so that we can skip middle five numbers in below loop
    if (n%2 == 0 || n%3 ==0) return false;
    
    for (var i=5; i*i<=n; i=i+6) {
        if (n%i == 0 || n%(i+2) == 0) return false;
    }

    return true;
}
allPrimeLessThanN(15);
//prints 2,3,5,7,11,13
//Time Complexity: O(nsqrt(n))
//isPrime with a time complexity of O(sqrt(n)) runs n times
