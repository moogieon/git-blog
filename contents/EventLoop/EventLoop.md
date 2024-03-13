---
date: '2023-11-14'
title: 'Event Bubbling & Event Loop'
categories: ['JavaScript']
summary: '이벤트 버블링!? 이벤트 루프!?'
thumbnail: './eventloop.webp'
---

##  이벤트 루프!? 이벤트 버블링!? 그게 뭐더라..
이벤트 버블링과 이벤트 루프는 자바스크립트의 이벤트 처리와 비동기 프로그래밍에서 중요한 개념으로 면접 단골 질문이였다. 그래서 조금 더 이해하고 넘어가보자

### 이벤트 루프(Event Loop)
이벤트 루프는 자바스크립트의 비동기 동작 방식을 설명하는 핵심 개념이다. 자바스크립트는 단일 스레드로 동작하기 때문에 동시에 하나의 작업만을 처리할 수 있다. 
비동기 작업(예: 타이머, HTTP 요청, 이벤트 핸들러 등)은 백그라운드에서 수행되며, 작업이 완료되면 해당 작업을 처리할 콜백 함수가 이벤트 큐에 추가된다.

***++ 단일스레드란?*** 동시에 하나의 작업만을 처리할 수 있다는 것

이벤트 루프는 이벤트 큐에서 이벤트를 하나씩 꺼내와 실행하고 이벤트 루프는 콜 스택이 비어있을 때마다 이벤트 큐에서 이벤트를 꺼내와 콜 스택에 추가하여 실행합니다. 따라서 콜 스택이 비어있을 때까지 이벤트 루프가 계속해서 실행된다. 
***++ 관련 포스팅을 따로 정리해야겠다.***
이벤트 루프를 통해 자바스크립트는 비동기 작업을 동기적으로 처리하는 것처럼 보이며, 비동기 프로그래밍을 보다 쉽게 다룰 수 있습니다.

```javascript
console.log('Start');

setTimeout(function() {
  console.log('Timeout');
}, 0);

console.log('End');
```
위의 코드에서 'Start'와 'End'가 먼저 호출 스택에 추가되고 순서대로 출력된다. 그 후에 setTimeout의 콜백 함수가 백그라운드에서 비동기적으로 실행 이 콜백 함수는 시간이 지난 후에 이벤트 큐에 추가되고, 호출 스택이 비어있을 때 이벤트 루프에 의해 호출 스택에 추가되어 'Timeout'이 출력된다.

### 이벤트 버블링(Event Bubbling)
이벤트 버블링은 HTML 요소에서 발생한 이벤트가 해당 요소의 부모 요소로 전파되는 현상 이벤트가 특정 요소에서 발생하면, 그 이벤트는 해당 요소의 상위 요소로 전파되어 각 요소에서 처리될 수 있다. 즉, 이벤트가 하위 요소에서 상위 요소로 "버블링"되는 것.

```js
<div id="parent">
  <button id="child">Click me</button>
</div>

document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', function() {
  console.log('Child clicked');
});
```
위의 예시에서 버튼을 클릭하면 "Child clicked"와 "Parent clicked"가 순서대로 출력된다. 이는 버튼에서 발생한 클릭 이벤트가 버튼의 부모 요소인 div#parent로 버블링되기 때문이다.


## 요약
- 이벤트 루프는 자바스크립트의 비동기 동작 방식을 관리하는 것 비동기 작업은 이벤트 큐에 추가되어 콜 스택이 비어있을 때 순차적으로 실행된다.
- 이벤트 버블링은 HTML 요소에서 발생한 이벤트가 부모 요소로 전파되는 현상