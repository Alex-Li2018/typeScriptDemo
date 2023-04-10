# class Heritage 类继承

## implements

```js
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
```

注意：

```js
interface Checkable {
  check(name: string): boolean;
}
 
class NameChecker implements Checkable {
  // 这里的参数必须和接口里的一致
  check(s: string) {
  }
}
```

## extends

```js
class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
```

## 区别

Extends可以理解为全盘继承了父类的功能。implements可以理解为为这个类附加一些额外的功能；
- interface定义一些方法,并没有实现,需要implements来实现才可用。extend可以继承一个接口,但仍是一个接口,也需要implements之后才可用。
- 对于class而言，Extends用于(单)继承一个类（class），而implements用于实现一个接口(interface)。