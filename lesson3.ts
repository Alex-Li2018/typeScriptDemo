/**
 * 类
 * 访问修饰符
 * 
 * public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
 * private 修饰的属性或方法是私有的，不能在声明它的类的外部访问(只能在当前类的内部)
 * protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
 */

 class Animal {
    // public name : string
    // constructor(name: string) {
    //     this.name = name;
    // }

    // 简写 // 默认是public
    constructor( public name : string) {}
    // 定义一个protected
    protected walk() {
        console.log('walk')
    }
    say() {
        console.log('talk');
    }
 }

 const a = new Animal('dog');
 a.say();
//  a.walk(); // protected类的外部不能使用

 /***
  * 类的继承
  * super关键字
  * 1. super作为函数调用时，代表父类的构造函数
    class A {}

    class B extends A {
        constructor() {
            super();
        }
    }

    super()在这里相当于A.prototype.constructor.call(this)

  * super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
  * super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()
  * super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的
  */

  // 1. 重写父类方法
  class Dog extends Animal{
    constructor(name: string, public age: number) {
        super(name);
    }
    // say() {
    //     console.log('dog talk', 'age---', this.age)
    // }

    // 通过super关键字
    say() {
        super.say();
        console.log('age---', this.age)
    }

    walk() {
        super.walk();
    }
  }

  const dog = new Dog('糖糖', 10);
  dog.say();
  dog.walk();

  // 存取器getter setter 使用 getter 和 setter 可以改变属性的赋值和读取行为
  class Data {
    constructor(private _age: number) {}
    get age() {
        return this._age - 10
    }
    set age(val: number) {
        this._age = val - 10
    }
  }

  const d = new Data(10)
  d.age = 25;
  console.log(d.age)

  // 只读属性
  class Read {
    readonly name
    constructor(name: string) {
        this.name = name
    }
  }

  const r = new Read('aaaa');
  console.log(r.name)

  /***
   * 抽象类 abstract 用于定义抽象类和其中的抽象方法
   * 
   * 1. 抽象类是不允许被实例化的
   * 2. 抽象类中的抽象方法必须被子类实现
   */

  /***
   * 类的类型
   */
  class Animal1 {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
  }
  
  let c: Animal1 = new Animal1('Jack');
  console.log(c.sayHi());
