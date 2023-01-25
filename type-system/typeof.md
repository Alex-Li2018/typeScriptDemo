# typeof

javascript已经有了typeof关键字 使用一致

```js
let s = 'hello'
let n: typeof s 
```

# ReturnType<T>

接收函数类型并返回函数类型的返回值的类型, 注意T必须是函数类型而不能是函数名称否则会报错

```js
type Predicate = (x: unknown) => boolean
// boolean
type K = ReturnType<Predicate>

function add(x: number, y: number): number {
    return x + y
}
// error
type Z = ReturnType<add>

// type 和 值是两回事 
// number
type P = ReturnType<typeof add>
```

