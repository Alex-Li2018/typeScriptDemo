# typescript常见运算符

## 非空断言操作符（!）

在上下⽂中当类型检查器⽆法断定类型时，⼀个新的后缀表达式操作符 ! 可以⽤于断⾔操作对象是⾮ null 和⾮ undefined 类型

接下来看看其具体使用场景

**赋值时忽略 null 和 undefined**

```js
const fn = (name: string | null | undefined) => {
  const objName: string = name; // 报错
}
```

**函数调用时忽略 null 和 undefined**

```js
type cbGenerator = () => string;

const fn = (cb: cbGenerator | null | undefined) => {
  cb()
}
```

## 可选链操作符（?.）

可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。

就是代码运行时如果遇到 null 或 undefined 就可以⽴即停⽌某些表达式的运⾏，直接返回undefined

```js
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42
const safe = obj?.qux?.baz; // undefined
```

## 空值合并运算符（??

当左侧操作数为 null 或 undefined 时，其返回右侧的操作数，否则返回左侧的操作数。。
与逻辑或 || 运算符不同，逻辑或会在左操作数为 falsy 值时返回右侧操作数。也就是说，如果你使⽤|| 来为某些变量设置默认的值时，你可能会遇到意料之外的⾏为。⽐如为 falsy 值（''、NaN 或 0）时

```js
const name = null ?? 'nordon'; // 返回nodedon
const age = 0 ?? 18; // 返回 0
const age2 = 0 || 18; // 返回 18
```

## 可选属性（?:）

在⾯向对象语⾔中，接⼝是⼀个很重要的概念，它是对⾏为的抽象，⽽具体如何⾏动需要由类去实现。TypeScript 中的接⼝是⼀个⾮常灵活的概念，除了可⽤于对类的⼀部分⾏为进⾏抽象以外，也常⽤于对「对象的形状（Shape）」进⾏描述。
在 TypeScript 中使⽤ interface 关键字就可以声明⼀个接⼝：

```js
interface Person {
    name: string;
    age: number; 
}

let nordon: Person = {
    name: "nordon"
};
```

若是缺少参数将会报错，此时就需要使用可选属性

```js
interface Person {
    name: string;
    age?: number; 
}
```

## 运算符（&）

在 TypeScript 中交叉类型是将多个类型合并为⼀个类型。通过 & 运算符可以将现有的多种类型叠加到⼀起成为⼀种类型，它包含了所需的所有类型的特性

```js
type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };
let point: Point = {
  x: 1, 
  y: 1 
}
```

## 运算符（|）

在 TypeScript 中联合类型（Union Types）表示取值可以为多种类型中的⼀种，联合类型使⽤ | 分隔每个类型。联合类型通常与 null 或 undefined ⼀起使⽤

```js
const fn = (info: strong | null | undefined) => {}
```

## 数字分隔符（_）

对于⼀个数字字⾯量，现在可以通过把⼀个下划线作为它们之间的分隔符来分组数字

```js
const num1 = 1_234_567;
// 等价
const num1 = 1234567;
```