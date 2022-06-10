---
date: '2022-04-01'
title: '프로토타입 가볍게 이해하기'
categories: ['Prototype']
summary: '프로토타입?! 들어는 봤음'
thumbnail: './prototye.png'
---

## 프로토타입
- 프로토타입을 한마디로 정의하면 **유전자!**  

```js
function Person() {
  this.eyes = 2;
  this.nose = 1;
}
let kim  = new Person();
let park = new Person();
console.log(kim.eyes);  // => 2
console.log(kim.nose);  // => 1
console.log(park.eyes); // => 2
console.log(park.nose); // => 1
```
• kim 과 park은 둘다 눈과 코를 가지고 있는데, 메모리에는 눈과 코가 두개씩 총 4개가 할당된다. 
객체를 100개 만들면 200개의 변수가 메모리에 할당 이를 해결하기 위해 프로토타입 개념 도입된다.

```js
function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;
let kim  = new Person();
let park = new Person():
console.log(kim.eyes); // => 2
...
```
• Person.prototype 이라는 빈 오브젝트(부모 유전자)가 어딘가에 존재하고,  Preson 함수로 부터 생성된 객체들은 부모 유전자에 들어 있는 값을 쓸 수 있다.

- 클래스 기반 언어에서는 상속을 사용하지만 프로토타입 기반 언어에서는 어떤 객체를 원형(prototype)으로 삼고, 이를 복제(참조)함으로써 상속과 비슷한 효과를 얻는다.

![[Pasted image 20220331155215.png]]
 
 •  어떤 생성자 함수를 new 연산자와 함께 호출하면
 •  Constructor에서 정의된 내용을 바탕으로 새로운 인스턴스를 생성함
 • 이때 인스턴스에는 __proto__라는 프로퍼티가 자동으로 부여됨
 •   이 프로퍼티는 Contructor의 prototype이라는 프로퍼티를 참조함


