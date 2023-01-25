# 索引访问类型

```js
type Person = {
    name: string,
    age: number
}

interface Person1 {
    name: string
    age: number
}

type Age = Person['age']
type Name = Person1['name'] 
```

## 配合联合类型使用

```js
type Person = {
    name: string,
    age: number
}

// string | number
type I1 = Person['name' | 'age']
type U1 = 'name' | 'age'
// string | number
type I2 = Person[U1]
```

## 使用number关键字获取数组元素的类型

```js
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
]

// { name: string, age: number }
type Person1 = typeof MyArray[number]
type Person2 = typeof MyArray[number]

// string
type Name = typeof MyArray[number]['age']
```

