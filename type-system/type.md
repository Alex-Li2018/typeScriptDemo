# type 

## Object Types

对象类型的定义： 只需要定义对应的属性以及属性值的类型，你可以使用,或者;来分割属性，同时最后一个分隔符可以省略

```js
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

可选属性

```js
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
// Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
```

## Union Type(联合类型)

typeScript允许你通过已存在的类型构建新的类型，联合类型是两种及以上类型组成的，代表值可以是联合类型当中的任一一种类型

```js
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
```

## Type Aliases(类型别名)

对类型注释起一个别名方便反复使用

```js
type Point = {
  x: number;
  y: number;
};

type ID = number | string;
```

## interface 

是另外一种方式来声明对象类型

```js
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

## Differences Between Type Aliases and Interfaces

Type Aliases and Interfaces在大部分时候都是很类似对，你可以自由的选择他们。几乎所有的interfaces属性在type中都是可用的。最主要的区别是interfaces是可扩展的而type不能重新打开类型添加属性

Extending an interface 

```js
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
```

Extending a type via intersections
```js
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```

Adding new fields to an existing interface

```js
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

A type cannot be changed after being created

```js
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.
```

## Type Assertions(类型断言)

有时候你比typeScript更能准确的知道当前值的类型，例如： document.getElementById返回的是HTMLElement，但是在你的页面里你明确知道他是HTMLCanvasElement canvas元素，你可以使用类型断言指定更具体的类型。类型断言会被编译器移除不会影响你的代码。

```js
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

## Literal Types(字面量类型)

除了通用类型string或者number之外，我们还可以指定具体的字符串或者数字作为变量的类型。布尔字面量 true | false这种，但是boolean就是true | false的字面量类型

```js
let x: "hello" = "hello";
// OK
x = "hello";
// error
x = "howdy";
```

```js
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

// ok
printText("Hello, world", "left");
// error
printText("G'day, mate", "centre");


// 数字字面量
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

// 与不是字面量类型结合

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
```