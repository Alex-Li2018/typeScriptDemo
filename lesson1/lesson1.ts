/**
 * typeScript的变量类型
 * Number
 * Boolean
 * String
 * Array
 * Object
 * undefined
 * null
 * unknow
 * never
 * Any
 * enum (枚举)
 * tuple (元祖)
 * void
 */

 /**
  * 类型推断: 能够推断出数据类型的
  * 类型注解: 
  */

  function hello():void {
    let str : string = 'hello world';
    console.log(str);
  }

  hello();

  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add(1, 1));

  // 对象属性的类型注解
  function sum({ a, b }: {a: number, b: number}) : number {
    return a + b;
  }

  console.log(sum({a: 1, b: 3}));

  // 函数抛出错误使用never
  // function errorFn() :never {
  //   throw new Error('这是一个错误');
  //   console.log(1111);
  // }

  // errorFn();


  // 数组类型
  const numberArr: number[] = [1,2,3]
  const stringArr: string[] = ['a', 'b']
  const undefinedArr: undefined[] = [undefined, undefined];
  // 不区分元素类型的顺序
  const arr: (number | string)[] = [1, 'string']
  const arr1: (string | number)[] = [1, 'string']

  // type alias 类型别名
  const objectArr: {name: String, age: number}[] = [{name: 'lisi', age: 18}, {name: 'zhangsan', age: 20}]
  type person = {
    name: string,
    age: number
  }
  const objectArr1: person[] = [{name: 'lisi', age: 18}, {name: 'zhangsan', age: 20}]
  class people {
    name: string
    age: number
  }
  const objectArr2: people[] = [{name: 'lisi', age: 18}, {name: 'zhangsan', age: 20}]

  // 元祖 tuple
  // 元祖的使用时为了约束数组每一个元素的类型,
  // 且必须按照固定的类型写入
  const tupleArr: [string, string, number] = ['lisi', 'teacher', 20]

