const removeFromArray = function(arr, num) {
    let splicedArray = arr.splice(arr.indexOf(num),1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
