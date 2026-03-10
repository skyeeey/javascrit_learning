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

//输入一个数组，输出：

//- 最大值
//- 最小值
//- 平均值

function MAX(array){
    let maximum = array[0];
    for (i=0; i<array.length; i++) {
        if(maximum < array[i]){
            maximum = array[i];
        }
    } return maximum;
}
console.log(MAX([1,3,5,7,9,10]));

function MIN(array){
    let minimum = array[0];
    for (i=0; i<array.length; i++) {
        if (minimum > array[i]){
            minimum = array[i];
        }
    } return minimum;
}
console.log(MIN([1,3,5,7,9,10]));


function AVG(array){
    let SUM = 0;
    for (i=0; i< array.length; i++) {
        SUM += array[i];
    } return SUM/array.length;
}

console.log(AVG([1,3,5,7,9,10]));

//重新写一遍：

//- 平均值函数
//- 数组去重函数
function AVG(array){
    let SUM = 0;
    for(i=0; i< array.length; i++) {
        SUM+=array[i];
    }return SUM/array.length;
}
console.log(AVG([1,3,5,7,9,10]));

function deleteDuplicates(array) {
    let arr = [];
    for(i=0; i<array.length; i++) {
        if (!arr.includes(array[i]))
            arr.push(array[i]);
    }
    return arr;
}
console.log(deleteDuplicates([1,3,5,8,3,1,9,10]));


// 统计数组中每个元素出现次数

function countNumbers(arr) {

let result = {};
for (let num of arr) {
    if(result[num]){
        result[num]++
    } else {
        result[num]=1;
    }
} return result;
}

console.log(countNumbers([1,3, 2, 3, 2, 1, 4, 6,5]));


//写 5 个变量和常量，打印到 console
//变量
var boo = 5;
var uoo = 13;
var iop = 'hence';
var lucky = 'bright';
var uio = [1, 3, 6, 10, 13];

//常量
const oi = 6;
const poo = [9, 19, 29, 30];
const sweet = [3, 5,100006];
const yankee = [5, 8, 19, 29, 40];
const weee = 'hug'

console.log(boo);
console.log(uoo);
console.log(iop);
console.log(lucky);
console.log(uio);

console.log(oi);
console.log(poo);
console.log(sweet);
console.log(yankee);
console.log(weee);


//创建一个数组 [1,2,3,4,5]，打印每个元素
var array = [1, 2, 3, 4, 5];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);



// 假设我们有三个骑手
let riders = [
    { name: "Rider 1", position: "Left Lane" },
    { name: "Rider 2", position: "Middle Lane" },
    { name: "Rider 3", position: "Right Lane" }
];

// 用 for 循环输出每个骑手信息
for (let i = 0; i < riders.length; i++) {
    console.log(riders[i].name + " 在 " + riders[i].position);
}

// 或者用更简洁的 for...of 循环
for (let rider of riders) {
    console.log(rider.name + " 在 " + rider.position);
}


// p5.js 示例
// let riders = [
//   { name: "Rider 1", x: 100, y: 200 },
//   { name: "Rider 2", x: 200, y: 200 },
//   { name: "Rider 3", x: 300, y: 200 }
// ];

// function setup() {
//   createCanvas(400, 400);
//   background(30); // 深色背景
//   fill(255);      // 白色文字和粒子
//   textSize(16);
  
//   // 循环输出骑手
//   for (let rider of riders) {
//     // 画粒子（用 ellipse 表示骑手位置）
//     ellipse(rider.x, rider.y, 10, 10);
//     // 输出骑手名字
//     text(rider.name, rider.x - 20, rider.y - 10);
//   }
// }

// function draw() {
//   // 这里暂时不动，静态显示骑手位置
// }


//写函数 greet(name) 返回 Hello name
function greet(name) {
    return 'Hello' + ' '+ name;
}
console.log(greet('Alice'));
console.log(greet('Skye'));
console.log(greet('Tianna'));

//写函数判断数字是奇数还是偶数
function oddOrEven(num){
    if(num%2===0){
        return false;
    } else {
        return true;
    }
}
console.log(oddOrEven(13));
console.log(oddOrEven(222));
console.log(oddOrEven(157));



//写函数：输入数组，输出数组中所有奇数
function allOdds(array){
    let result = [];
    for(let num of array){
        if(num%2===1){
            result.push(num);
        }
    } return result;
}
console.log(allOdds([1,3,5,7,9,13,2,16,14]));
console.log(allOdds([2,16,14]));
console.log(allOdds([13,19,27]));


//控制台小游戏：随机生成数字 1–10，用户猜数字etc: [1,2,3]，提示高/低
function Guess(){
    let rand = Math.floor(Math.random()*10)+1;
    let guesses = [1, 2, 3];
    for (let guess of guesses){
        if (guess == rand){
           console.log(guess + 'Correct!');
        }
        else if (guess < secret) {
            console.log(guess + 'Too low')
        }
        else {
            console.log(guess + 'Too high');
        }       
        }
    }


// 输出数组里的每个数字 x2
function Double(array) {
    let double = [];
    for (let num of array) {
        num= num*2;
        double.push(num);
    }
    return double;
}   
console.log(Double([1,2,3,5,66]));



//写函数：
// function addNumber(arr, num)
// 功能：
// 把 num 加入数组并返回数组

// 例如：
// addNumber([1,2,3],4)
// 输出
// [1,2,3,4]

// function addNumber(arr, num) {
//     return arr.push(num);
// }
// console.log(addNumber([1,2,3], 4));


let nums = [1,2,3,4,5];

for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumArray([1, 3, 6,10]));

let person = {
    name: "Skye",
    age: 25
}
console.log(person.name);

let person2 = {
    name: "Lily",
    age: 53
}
console.log(person2.name);

let book = {
    title: "love",
    author: "hemingway",
    price: 35
}
console.log(book.title + book.author);


// 把数组转换成对象统计次数（就是你之前做的题）

// 输入：

// ```
// [1,2,2,3,3,3]
// ```

// 输出：

// ```
// {1:1,2:2,3:3}
// ```

// 提示结构：

function CountElements(array) {
    let result = {};
    for (let num of array){
        if (result[num]) {
            result[num]++;
        } else{
            result[num]=1
        }
    } return result;
}
console.log(CountElements([1, 3, 5, 7, 9, 3, 7, 1]));


function secondBest(){
//找第二大的数
let arr = [5, 3, 9, 1, 7];
let max = arr[0];
for (let i=0; i< arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
let second = -Infinity;
for (let i =0; i<arr.length; i++) {
    if(arr[i] > second && arr[i] < max) {
        second = arr[i];
    }
}
console.log(second);
}


//小项目：做一个数组统计工具
function CountElements(array) {
    let result = {};
    for (let num of array){
        if (result[num]) {
            result[num]++;
        } else{
            result[num]=1
        }
    } 
    for (let key in result) {
        console.log("数字" + key + "出现" + result[key] + "次");
    }

}
console.log(CountElements([1, 3, 5, 7, 9, 3, 7, 1]));

//输出数组元素
let arr = [3,6,9];
for (let num of arr) {
    console.log(num);
}

//输出数组元素 ×2
let arrrr = [2,10,29];
for (let num of arr) {
    console.log(num*2);
}

//做数组统计工具
function countNumberss(array) {
    let result = {};
    for(let num of array){
        if (result[num]) {
            result[num]++
        }
        else {
            result[num]=1;
        }
    }
    for (let key in result){
        console.log("数字" + key + "出现" + result[key] + "次");
    }
}
console.log(countNumberss([1,3,4, 5,2,1,2,4 , 3, 6]));

//找第二大的数
function secondLargest(array) {
    let maximum = array[0];
    for (let i=0; i< array.length; i++) {
        if (maximum < array[i]) {
            maximum = array[i];
        }
    }
    let second = -Infinity;
    for (let i=0; i< array.length; i++) {
        if (second < array[i] && array[i] < maximum) {
            second = array[i];
        }
    }
    return second;
}
console.log(secondLargest([2,3,9,10,233,1000,222222]));




//找偶数
function even(array) {
    let even = [];
    for (let num of array) {
        if (num%2==0) { 
            even.push(num);
        }
    }
    return even;
}
console.log(even([1,2,3,5,6,8,2,1,10,22]));


// 小作品：随机生成1–10
//        用户猜测数组
//        输出高/低

//控制台小游戏：随机生成数字 1–10，用户猜数字etc: [1,2,3]，提示高/低
function Guess(){
    let rand = Math.floor(Math.random()*10)+1;
    let guesses = [1, 2, 3];
    for (let guess of guesses){
        if (guess == rand){
           console.log(guess + 'Correct!');
        }
        else if (guess < secret) {
            console.log(guess + 'Too low')
        }
        else {
            console.log(guess + 'Too high');
        }       
        }
    }


//做一个小实验：生成100个随机数 打印
let randomm = Math.random()*100;
console.log(randomm);
