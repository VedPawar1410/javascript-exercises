const repeatString = function(str,num) {
    let tempStr='';
    if(num==-1){
        return 'ERROR';
    }
    else{
        for (let i = 0; i < num; i++) {
            tempStr+=str;
        }
        return tempStr;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
