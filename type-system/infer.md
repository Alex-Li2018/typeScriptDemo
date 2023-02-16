# infer

Infer 关键字用于条件中的类型推导。将推导的类型放入变量中，这个推导的类型可以用在条件分支中。常用在一些公用类型中。

```js
type ArrayElementType<T> = T extends (infer E)[] ? E : T;

// type of item1 is `number`
type item1 = ArrayElementType<number[]>;

// type of item1 is `{name: string}`
type item2 = ArrayElementType<{ name: string }>;
```

上例中当构造item1时，条件类型中的条件为真，因为number[]匹配(infer E)[]。 因此，在此匹配过程中，E 被推断为number。 返回条件的第一个分支 E，解析为 number。item1的类型就是number。
在构造item2时，条件类型中的条件为false，因为{name:string}不匹配(infer E)[]。因此返回条件的第二个分支T，也就是原来传入的参数{name: string}。item2的类型是对象字面量类型{ name: string }。

## typeScript中最典型的例子

我们想要让typescript自动帮我们推导一个函数类型的返回值，如下例子：

```js
// T0 = string
type T0 = FunctionReturnType<() => string>;
```

我们利用infer字段就很容易实现， 思路：

- 判断是否是函数类型，如果是函数类型推导函数的返回值类型；
- 如果不是函数类型，类型报错

```js
type FunctionReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : T;
```

上例利用extends做范型约束，如果不是函数类型会类型报错。

## 为何要设计infer

设计infer必定是typescript不能满足某些场景时才设计。我想其中最重要的一个原因是，范型是一个整体，当范型是一个对象 数组或者函数的的时候，很难直接准确获取到其子类型，比如对象的属性数组的元素函数的返回值等等。例如我要推到对象 **{label: xxxx}** 中label属性值的类型，就可以如此推导  **{label：infer R}**

```js
type GetLabelTypeFromObject<T> = T extends ? { label: infer R } ? R : never

type Result = GetLabelTypeFromObject<{ label: string }>;
// type Result = string
```