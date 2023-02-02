# Utility Types(工具类型)

## Partial<type>

将type中的所有属性都变为可选的

原理：

```js
type Partial<T> = {
    [P in keyof T]?: T[P] | undefined
}
```

示例：

```js
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
```

## Required<Type>

将type中的所有属性都变为必要的

原理：

```js
type Required<T> = {
    [P in keyof T]-?: T[P]
}
```

示例：

```js
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
// error 差属性b
const obj2: Required<Props> = { a: 5 };
```

## Readonly<Type>

将type中的所有属性都变为只读

原理：

```js
type Required<T> = {
    readonly [P in keyof T]-?: T[P]
}
```

示例：

```js
interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
```

## Record<Keys, Type>

将对象里的属性类型设置为Keys的类型，将属性值的类型设置为Type类型

原理：

```js
type Record<k extends string | number | symbol, T> = {
    [P in K]: T
}
```

示例：

```js
const obj: Record<string, string> = {
    name: 'alex',
    sex: 'man'
}


interface CatInfo {
  age: number;
  breed: string;
}
 
type CatName = "miffy" | "boris" | "mordred";
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

## Pick<Type, Keys>

从type中挑选出对应的属性（Keys是属性字符串组成的字符串字面量集合）并组成新的类型

原理：

```js
type Pick<T, K extneds keyof T> = {
    [P in K]: T[P]
}
```

示例：

```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

## Omit<Type, Keys>

从type中挑移除对应的属性（Keys是属性字符串组成的字符串字面量集合）并组成新的类型

原理：

```js
type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
```

示例：

```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
```

## Exclude<UnionType, ExcludedMembers>

从联合类型UnionType中排除ExcludedMembers形成新的类型

原理：

```js
type Exclude<T, U> = T extends U ? never : T
```

示例：

```js
type T0 = Exclude<"a" | "b" | "c", "a">;

// type T0 = "b" | "c"
```

## Extract<Type, Union>

从联合类型UnionType中抽取Union中共有的类型并形成新的类型

原理：

```js
type Extract<T, U> = T extends U ? T : never
```

示例：

```js
type T0 = Extract<"a" | "b" | "c", "a" | "f">;

// type To = "a"
```

## NonNullable<Type>

从type中排出null 与undefined类型

原理：

```js
type NonNullable<T> = Exclude<T, null | undefined>
type NomNullable<T> = T & {}
```

示例：

```js
type T0 = NonNullable<string | number | undefined>;
     
// type T0 = string | number
```
