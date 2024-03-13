---
date: '2023-02-04'
title: '프론트엔드에서의 함수형 프로그래밍과 객체지향 프로그래밍'
categories: ['함수형 프로그래밍', '객체지향 프로그래밍']
summary: 'FE 함수형 프로그래밍과 객체지향 프로그래밍'
thumbnail: './programming.webp'
---

## 함수형 프로그래밍과 객체지향 프로그래밍

프론트엔드 개발에서는 함수형 프로그래밍과 객체지향 프로그래밍이 중요한 개념 이 두 가지를 이해하고 그 차이를 이해하는 것은 주니어 개발자로서 중요한 일이다. 하지만 함수형 프로그래밍으로 개발을 시작했고 아직까지 함수형을 고집하는 나로써 OPP의 개념을 알고 갈 필요가 있다.

### 함수형 프로그래밍(Functional Programming)

#### 특징

- **불변성(Immutability):** 데이터를 변경할 때 새로운 데이터를 생성하고 기존 데이터를 변경하지 않는다.
- **순수 함수(Pure Functions):** 부작용(side effect)이 없는 함수를 작성한다. 즉, 같은 입력에 대해 항상 같은 출력을 반환한다.
- **고차 함수(Higher-order Functions):** 함수를 값으로 다루고 다른 함수의 인자로 전달하거나 함수를 반환할 수 있다.
- **재귀(Recursion):** 반복문 대신 재귀 함수를 사용하여 문제를 해결합니다.

#### 장점

- 코드가 간결하고 읽기 쉽다.
- 테스트하기 쉽고 예측 가능한 코드를 작성할 수 있다.
- 병렬 처리와 비동기 프로그래밍에 유리하다.

#### 예시

```js
// 불변성과 순수 함수
function doubleNumbers(numbers) {
  return numbers.map(num => num * 2)
}

// 고차 함수
function multiplyBy(factor) {
  return function (num) {
    return num * factor
  }
}
const double = multiplyBy(2)

// 재귀
function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}
```

## 객체지향 프로그래밍(Object-Oriented Programming)

### 특징

- *** 클래스(Class)와 객체(Object):*** 클래스는 객체를 생성하기 위한 설계도이며, 객체는 클래스의 인스턴스.
- **상속(Inheritance):** 부모 클래스의 특징을 자식 클래스가 물려받아 재사용할 수 있다.
- **캡슐화(Encapsulation):** 데이터와 해당 데이터를 처리하는 메서드를 하나의 단위로 묶어 정보를 은닉한다.
- **다형성(Polymorphism):** 같은 이름의 메서드가 다른 기능을 수행할 수 있다.

### 장점

- 모듈화가 용이하며 코드 재사용성이 높다.
- 복잡한 시스템을 구축할 때 유연하고 확장 가능한 구조를 제공한다.
- 코드를 이해하기 쉽고 유지보수가 용이하다.

### 예시

```js
// 클래스와 객체
class Animal {
  constructor(name) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a sound.`)
  }
}
const dog = new Animal('Dog')
dog.speak() // Output: Dog makes a sound.

// 상속
class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  speak() {
    console.log(`${this.name} barks.`)
  }
}
const dog = new Dog('Dog')
dog.speak() // Output: Dog barks.

// 캡슐화
class Counter {
  #count = 0
  increment() {
    this.#count++
  }
  getCount() {
    return this.#count
  }
}
const counter = new Counter()
counter.increment()
console.log(counter.getCount()) // Output: 1
```
## 결론 
 각각의 장점을 살려서 코드를 작성하고, 상황에 맞게 적절한 패러다임을 선택하여 프로그램을 구현하는 것이 중요하다고 생각한다.
하지만 나는 함수형 프로그래밍에서는 함수를 중심으로 입력값에 대해 항상 동일한 출력을 반환하며 외부의 상태를 변경하지 않고. 이러한 함수는 모듈화가 용이하고 다른 함수와 결합 가능한 구조를 만들어내는것을 좋아한다. 