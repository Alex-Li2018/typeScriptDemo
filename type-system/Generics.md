# 类型系统

## Generics（范型）

目的： 大型软件项目中不仅仅需要定义良好且持续一致的API，更重要的是要可重复使用的。范型就能很好的解决这个问题。创建的组件能够适应多种多样的类型而不仅仅只是一种。同时允许用户消费组件的时候使用他们自己的类型。

无法通过范型创建命名空间以及枚举

### 示例

```js
function identity<T>(arg: T): T {
    return arg
}

// 两种调用方式
identify<string>('hello world')
identify('hello world')

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
```

## 范型类型

### 范型函数

```js
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: <Type>(arg: Type) => Type = identity;
// 对象字面量
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

### 范型类

```js
class GenericNumber<T> {
    zeroValue: T
    add(x: T, y: T): T {
        return x + y
    }
}
```

### 范型约束

范型约束：利用接口表示约束，利用接口和extends 关键字来表示我们的范型约束

```js
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
```