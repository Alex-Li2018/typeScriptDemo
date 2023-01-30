# object type 

在typescript中对象类型可以如下表示：

```js
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```

```js
interface Person {
  name: string;
  age: number;
}
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

```js
type Person = {
  name: string;
  age: number;
};
 
function greet(person: Person) {
  return "Hello " + person.name;
}
```

## Property Modifier属性修改

### 可选属性

```js
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
 
function paintShape(opts: PaintOptions) {
  // ...
}
 
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
```

### 只读属性

```js
interface Home {
  readonly resident: { name: string; age: number };
}

// 如果只读属性是一个对象 那么其中的属性还是能被修改
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
// 错误 只读属性不能被赋值
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };
}
```

### 索引签名

适用于不知道对象的属性名称只知道对象的形状

```js
interface StringArray {
  [index: number]: string;
}
 
const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
```

## Extending Types

一个interface可以继承自另一个interface再添加特有的属性， 这样可以复用已有interface里的属性

```js
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}

// 多继承
interface ColorfulCircle extends Colorful, Circle {
    total?: number
}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```

## Intersection Types(交叉类型)

通过&操作符来实现组合已存在的对象类型

```js
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```

## Generic Object Types(范型对象类型)

### 接口范型

```js
interface Box<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}
 
let boxA: Box<string> = { contents: "hello" };
```

```js
// Type可以是任何类型
interface Box<Type> {
  contents: Type;
}
 
interface Apple {
  // ....
}
 
// Same as '{ contents: Apple }'.
type AppleBox = Box<Apple>;
```

### 类型别名范型

类型别名的范型不仅仅可以使用在对象型类型别名上也可以使用在其他类型上面

```js
type Box<Type> = {
  contents: Type;
};
```

```js
type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNull<Type> = OneOrMany<Type> | null
 
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
```

## Array

数组本身就是一个范型类型

```js
interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;
 
  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;
 
  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;
 
  // ...
}
```

范型数组

```js
let myArray: string[] = ["hello", "world"];
```

### ReadonlyArray 

只读数组其值不能被改变

```js
const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
```

## uple Types(元组)

元组是是知道具体数量以及每个数组下标有对应的数据类型的数组

```js
type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
    const a = pair[0];
       
    const a: string
    const b = pair[1];
        
    const b: number
  // ...
}
```

元组解构

```js
function doSomething(stringHash: [string, number]) {
  const [inputString, hash] = stringHash;
 
  console.log(inputString);
                  
  // const inputString: string
 
  console.log(hash);
               
  // const hash: number
}
```
