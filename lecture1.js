//1 求数组平均值

function avg(array) {
    let sum = 0;
    for(i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}



//✨ 更高级写法（以后会用）
function avg(array) {
    const sum = array.reduce((acc, cur) => acc + cur, 0);
    return sum / array.length;
}







//lecture 1:
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16


function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(square(5)); // 25

function square(n) {
  return n * n;
}

function loop(x) {
  // “x >= 10”是退出条件（等同于“!(x < 10)”）
  if (x >= 10) {
    return;
  }
  // 做些什么
  loop(x + 1); // 递归调用
}
loop(0);


function walkTree(node) {
  if (node === null) {
    return;
  }
  // 对节点做些什么
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // 打印 6（即 1 + 2 + 3）

function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20（而不是 10）

//外层函数结束后，这个变量还被谁用？

//如果答案是：

//“被内部函数继续用。”

//那就是闭包。

function outer() {
 let count = 0;

 function inner() {
   count++;
   console.log(count);
 }

 return inner;
}

const fn = outer();
fn(); // 1
fn(); // 2





function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
//b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5

//使用默认参数
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5


// 可以把它理解为：

// 函数前面可以有固定参数
// 后面用 ... 把剩下所有参数装进一个集合
//multiply 函数使用剩余参数收集从第二个参数开始到最后的参数。然后，该函数将它们与第一个参数相乘。

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

function greet(firstName, ...otherNames) {
  console.log(firstName)
  console.log(otherNames)
}

greet("Tom", "Alice", "Bob", "John")

//另外，创建一个绑定函数可以使得 this 值被正确传递给 growUp() 函数。

// 箭头函数没有自己的 this，而是使用封闭执行上下文的 this 值。
// 因此，在以下代码中，传递到 setInterval 中的函数内的 this 与闭包函数中的 this 相同：

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // 这里的 `this` 正确地指向 person 对象
  }, 1000);
}

const p = new Person();


// 预定义函数
// JavaScript 语言有几个顶级的内置函数：

// eval()
// eval() 方法执行方法计算以字符串表示的 JavaScript 代码。

// isFinite()
// isFinite() 全局函数判断传入的值是否是有限的数值。如果需要的话，其参数首先被转换为一个数值。

// isNaN()
// isNaN() 函数判断一个值是否是 NaN。注意：isNaN 函数内部的强制转换规则十分有趣。你也可以使用 Number.isNaN() 来判断该值是否为 NaN。

// parseFloat()
// parseFloat() 函数解析字符串参数，并返回一个浮点数。

// parseInt()
// parseInt() 函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。

// decodeURI()
// decodeURI() 函数对先前经过 encodeURI 函数或者其他类似方法编码过的统一资源标志符（URI）进行解码。

// decodeURIComponent()
// decodeURIComponent() 方法对先前经过 encodeURIComponent 函数或者其他类似方法编码的统一资源标志符（URI）进行解码。

// encodeURI()
// encodeURI() 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理（surrogate）”字符组成的字符，只会编码为四个转义序列）。

// encodeURIComponent()
// encodeURIComponent() 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理”字符组成的字符，只会编码为四个转义序列）。



