# keyof

keyof是typescript中关键字用于从一个对象中提炼属性（键）的类型

```js
type Point = { x: number; y: number };
// 'x' | 'y'
type P = keyof Point; 
```

## 字面签名
```js
type Arrayish = { [n: number]: unknown };
// number
type A = keyof Arrayish;

 
type Mapish = { [k: string]: boolean };
// string ｜ number
type M = keyof Mapish;
```

Note that in this example, M is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].