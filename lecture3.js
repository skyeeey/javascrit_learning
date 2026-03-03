//① 写一个函数：

// 输入数组，返回最大值

// 不能用 Math.max。

// 必须用循环。

function MAX(array){
    let max = array[0];
    for (i=0; i<array.length; i++){
        if (max < array[i]){
            max = array[i];
        }
    } return max;
}
console.log(MAX([1,3,5,9,1202,23026]));



// ② 写一个函数：

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