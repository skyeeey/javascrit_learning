//1 求数组平均值

function avg(array) {
    let sum = 0;
    for(i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}
console.log(avg([8,8,9,10]));


//2 找最大值

function max(array){
    let maximum = array[0];
    for (i=0; i<array.length; i++) {
        if (maximum < array[i]) {
            maximum = array[i]
        }
    } 
    return maximum;
} 
console.log(max([1,9,2,4,23,5]));

//统计大于 80 的数量

function biggerthan80(array) {
    let count = 0;
    for(i=0;i<array.length;i++) {
        if (array[i] > 80) {
            count= count + 1;
        }
    }
    return count;
}
console.log(biggerthan80([1,81,90,100,222,3,5,7]));


//写三个程序：

//① 打印名字
function printName(person){
    return person.name;
}


//② 计算两个数和
function calculateSum(num1, num2){
    return num1+num2;
}
console.log(calculateSum(3, 6));

//③ 判断奇偶数函数
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));

//4.
function sumArray(arr){
    let sum=0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));



// 数组去重函数
function deleteDuplicates(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(deleteDuplicates([1,2,2,3,4,4]));


// 求数组最大值

function max(array){
    let maximum = array[0];
    for(i=0;i<array.length;i++){
        if (maximum < array[i]){
            maximum = array[i];
        }
    }
    return maximum;
}
console.log(max([1,222,3,4,4,3232,9]));


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




function MAX(array){
    let max = array[0];
    for (i=0; i<array.length; i++){
        if (max < array[i]){
            max = array[i];
        }
    } return max;
}
console.log(MAX([1,3,5,9,1202,23026]));

// 判断字符串是否是回文。

// 例如：

// ```
// level → true
// hello → false
// ```

// （提示：用反向遍历思路）

function reverseOrNot (str){
    let reverse = "";
    for (i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    return reverse === str;
}
console.log(reverseOrNot("level"));
console.log(reverseOrNot("console"));

//写函数：

// 删除数组中所有重复元素。

// （可以用 includes 思路）

function deleteDuplicates(array){
    let test = [];
    for (i=0; i<array.length; i++){
        if (!test.includes(array[i])){
            test.push(array[i]);
        }
    } return test;
}
console.log(deleteDuplicates([3, 6, 2, 4, 3, 3, 2, 1]));