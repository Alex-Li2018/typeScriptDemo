/**
 * 接口 interface
 * TypeScript 中的接口是一个非常灵活的概念，
 * 除了可用于对类的一部分行为进行抽象以外，
 * 也常用于对「对象的形状（Shape）」进行描述
 * 可选类型
 * 只读类型
 * 任意类型
 * 接口的继承会继承接口的所有内容
 */

 interface Person {
    name: string,
    age: number,
    walk(): void,
    say(): string,
    // 任意属性
    [propName: string]: any,
    // 可选属性
    sex?: string,
    // 只读属性
    readonly id: number
 }

 // teacher接口继承自person接口
 interface Teacher extends Person {
    teacher: string
 }

 const p1 = {
    name: 'zhangsan',
    age: 20,
    walk() {
        console.log('我在走路');
    },
    say() {
        return '我在说话'
    },
    sex: '男',
    id: 1
 }

 const t1 = {
    name: 'zhangsan',
    age: 20,
    walk() {
        console.log('我在走路');
    },
    say() {
        return '我在说话'
    },
    sex: '男',
    id: 1,
    teacher: '我是老师'
 }

 function descInterFace(p1: Person): Person {
    console.log(p1.name);
    p1.walk();
    console.log(p1.say());
    p1.sex && console.log(p1.sex);
    p1.love && console.log(p1.love);
    p1.teacher && console.log(p1.teacher);
    p1.name = 'lisi';
    return p1;
 }
 
 const p2 = descInterFace(p1)
 console.log(p2);

 const t2 = descInterFace(t1)
 console.log(t2);

 /**
  * 总结:
  * 在面向对象的编程中，
  * 接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，
  * 接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，
  * 接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，
  * 它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。
  */

 