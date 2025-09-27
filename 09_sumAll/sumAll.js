const sumAll = function(a,b) {
    if(a<0 || b<0 || (a % 1 !== 0) || (b % 1 !== 0) || !(Number.isFinite(a)) || !(Number.isFinite(b)) || Array.isArray(a) ||  Array.isArray(b)){
        return "ERROR";
    }
    /* if(a<b){
        let start = a;
        let end = b;
    }
    else{
        let start=b;
        let end = a;
    } */
    let sum=0;
    for (let i = (a<b ? a:b); i <= (a<b?b:a); i++) {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
