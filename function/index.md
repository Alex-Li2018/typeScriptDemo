# function 

## function type

```js
type fn = (s: stirng) => void

const greeting: fn = (s: sting) => {
    console.log(s)
}
```

## call Signatures 函数调用签名

```js
type DescribableFunction = {
  description: string;
  // 注意参数与返回值之间是: 而不是 =>
  (someArg: number): boolean;
};

// interface也是一样的
interface DescribableFunction = {
  description: string;
  // 注意参数与返回值之间是: 而不是 =>
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}
```

## 对象字面量声明函数类型

```js
{ <Type>(arg: Type): Type }
```

```js
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

## Construct Signatures 构造函数签名

js函数可以被new关键词调用 这些构造函数的声明如下

```js
type SomeConstructor = {
  // 构造函数的声明最前面使用new 关键字
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}
```

## Generic Functions 范型函数

```js
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
```

### Specifying Type Arguments 指定类型参数

```js
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// 类型错误 error
const arr = combine([1, 2, 3], ["hello"]);

// 指定type的类型
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

## Optional Parameters

```js
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
// 在javascript中未指定的参数会得到未定义的值
f(undefined) // OK
```

### Optional Parameters in Callbacks

```js
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // I don't feel like providing the index today
    callback(arr[i]);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
```

## 默认参数

```js
function f(x = 10) {
  console.log(x)
}
```

## 函数中this的声明

这里的this会在类型推导中得到 this代表user对象

```js
const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
```

还有一种改变this的表现，typeScript中提供了this参数这是javascript中不能的，因为javascript不允许有this参数出现。而typescript允许你通过this参数在函数体中改变this的指向。

```js
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
 
const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});
```

需要注意的是上述的回调函数不能写成箭头函数的表现形式。

```js
// error 这里的this是全局的this
const admins = db.filterUsers(() => this.admin);
```

## Rest Parameters 剩余参数

当函数的参数是无界（不知道个数）的时候，可以使用剩余参数的语法结构。

```js
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40] 
// m get value [1, 2, 3, 4]
const a = multiply(10, 1, 2, 3, 4);
```

