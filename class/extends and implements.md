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