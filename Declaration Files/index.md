# Declaration Reference

## Objects with Properties

code

```js
let result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:" + result);
let count = myLib.numberOfGreetings;
```

Declaration

```js
declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}
```

## Overloaded Functions

code 

```js
let x: Widget = getWidget(43);
let arr: Widget[] = getWidget("all of them");
```

Declaration

```js
declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];
```

## Reusable Types (Interfaces)

code 

```js
greet({
  greeting: "hello world",
  duration: 4000
});
```

Declaration

```js
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}
declare function greet(setting: GreetingSettings): void;
```


## Reusable Types (Type Aliases)

code 

```js
function getGreeting() {
  return "howdy";
}
class MyGreeter extends Greeter {}
greet("hello");
greet(getGreeting);
greet(new MyGreeter());
```

Declaration

```js
type GreetingLike = string | (() => string) | MyGreeter;
declare function greet(g: GreetingLike): void;
```

## Classes

code 

```js
const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();
class SpecialGreeter extends Greeter {
  constructor() {
    super("Very special greetings");
  }
}
```

Declaration

```js
declare class Greeter {
  constructor(greeting: string);
  greeting: string;
  showGreeting(): void;
}
```

## Global Functions

code 

```js
greet("hello, world");
```

Declaration

```js
declare function greet(greeting: string): void;
```