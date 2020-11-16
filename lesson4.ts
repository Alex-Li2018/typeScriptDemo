/**
 * 泛型: 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
 */

 function joinString<T>(str1: T, str2: T): T {
    return str1 || str2;
 }

 joinString<number>(1, 1);
 joinString<string>('', '1');