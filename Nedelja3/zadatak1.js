function findMax(){
    var i;
    var max = -Infinity;
    for(i=0; i<arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(4,5,6,6,7,7));
