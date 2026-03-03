// 数组去重函数
function deleteDuplicates(array) {
    let old = [];
    for(i=0;i<array.length;i++){
        if(old!=includes(array[i])){
            old.push(array[i]);
        }
    }
    return old;
}

console.log(deleteDuplicates([1,2,2,3,4,4]));


// 求数组最大值

function max(array){
    for(i=0;i<array.length;i++){
        let maximum = array[i];
        if (maximum < array[i]){
            maximum = array[i];
        }
    }
    return maximum;
}
console.log(maximum([1,222,3,4,4,3232,9]));

//数组求和函数（不用 reduce）

function SUM(array){
    let sum=0;
    for(i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
console.log(SUM([8,1,2]));






//👉 输入一个数组

// 输出：

// - 平均值
// - 最大值
// - 最小值
function AVG(array){
    let sum=0;
    for(i=0;i<array.length;i++){
        sum += array[i];
    } return sum/array.length;
}
console.log(AVG([1,3,5,7,9]));

function MAX (array) {
    let max = array[0];
    for (i=0;i<array.length;i++){
        if(max < array[i]){
            max = array[i];
        }
    }
    return max;
}
console.log(MAX([1,3,100,2,33]));


function MIN (array) {
    let min = array[0];
    for (i=0; i< array.length; i++){
        if (min > array[i]){
            min = array[i];
        }
    }
    return min;
}
console.log(MIN([1,6,2,0.01,233]));



- 字符串反转


function reverseString(str){
    let result = "";

    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }

    return result;
}

console.log(reverseString("hello"));


// 输入数组，返回最大值
function MAXIMUM (array){
    let maxx = array[0];
    for (i=0; i<array.length; i++){
        if (maxx<array[i]){
            maxx = array[i];
        }
    } 
    return maxx;
}
console.log(MAXIMUM([1,2,4,8,10]));

