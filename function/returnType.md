# 在函数上下文中经常遇到的类型

## void

表示函数没有返回值，如果一个函数没有return语句时候会很容易推导出来；或者有return语句但是没有返回具体的值。

```js
// The inferred return type is void
// javascript会返回undefined
function noop() {
  return;
}

function f() {
    console.log('1111')
}
```
注意在javascript中有return语句但是没有具体的返回值的时候会返回undefined，但是typescript中undefined与void不是一回事。

## object

The special type object refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined). This is different from the empty object type { }, and also different from the global type Object. It’s very likely you will never use Object.

object is not Object. Always use object!

Note that in JavaScript, function values are objects: They have properties, have Object.prototype in their prototype chain, are instanceof Object, you can call Object.keys on them, and so on. For this reason, function types are considered to be objects in TypeScript.

## unknown

unknow类型表现和any类型一样，但是它却更安全，对unkonw类型对值做任何操作都是不合法的。

```js
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b(); // error
}
```
对于不知道参数是什么类型的值以及返回值是什么类型的值很有用。
```js
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
 
// Need to be careful with 'obj'!
const obj = safeParse(someRandomString);
```

## never

```js
function fail(msg: string): never {
  throw new Error(msg);
}
```

## function

```js
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```
