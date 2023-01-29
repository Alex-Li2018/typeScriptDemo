# Mapped types

映射类型建立在索引类型签名的语法上用于声明未提前声明的属性类型

```js
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

## Property

PropertyKeys（通常通过 keyof 创建）的联合来遍历键以创建类型：

```js
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
 
/*
type FeatureOptions = {
    darkMode: boolean;
    newUserProfile: boolean;
}
*/ 
type FeatureOptions = OptionsFlags<FeatureFlags>;
```

## 映射修改

- 或者 + 来修改映射类型中的只读readonly或者可选?数据 +是默认的 -是移除

```js
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
 
/**
type UnlockedAccount = {
    id: string;
    name: string;
}
 */
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;
```

```js
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
/**
type User = {
    id: string;
    name: string;
    age: number;
}
 */
type User = Concrete<MaybeUser>;
```