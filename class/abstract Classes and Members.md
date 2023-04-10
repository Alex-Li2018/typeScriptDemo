# abstract Classes and Members

在typescript中class method filed（属性）都可以是抽象，其中abstract filed 以及 abstract method必须存在于abstract classs中，同时abstract class不能被实例话。必须实现extends之后才能实例话。

```js
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}

// Derived 衍生类实现了抽象类里面的方法
class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();
```
必须全部实现抽象类里的abstract filed 以及 abstract method 否则会报错
