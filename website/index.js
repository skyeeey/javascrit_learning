//1 求数组平均值

function avg(array) {
    let sum = 0;
    for(i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}

