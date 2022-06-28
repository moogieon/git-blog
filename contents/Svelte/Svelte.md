---
date: '2022-02-02'
title: 'Svlete 소개하기'
categories: ["Svelte"]
summary: 'Svelte는 프레임워크가 아니라 자바스크립트 컴파일러라고 봐야 한다.'
thumbnail: './svlete.png'
---

# Svelte란?


  [Vue.js](https://vuejs.org/), [React.js](https://reactjs.org/)와 같이 이미 많은 이용자들이 있는 프레임워크들 있다  Svelte는 이들과는 또 다른 매력이 있는 프레임워크이다.

Vue와 React와는 다른 Svelte의 가장 큰 차이점은 작업의 전환 방식인데, Svelte는 다른 프레임워크와는 달리 앱을 빌드하는 컴파일 단계에서 작업으로 전환하는 방식으로 동작을 한다는 것이 가장 큰 차이다.
(React나 Vue는 런타임 시점에 해석을 한다.)

Svelte는 앱의 상태가 변경될 때 **DOM을 외부에서 변경하여 업데이트하는 방식**으로 코드가 구현된다고 해. 즉 Vue, React에서 사용하는 가상 DOM 비교 방식과 다른 기술이라고 할 수있다, Svelte는 사용법이 쉽고 가벼우면서도 빠른 속도로 개발할 수 있다는 장점 덕분에 최근 관심도와 만족도부분에 
Reat, Vue 보다 높게 측정됐다. 
[웹 페이지](https://svelte.dev/)에서 소개하고 있는 Svelte의 특징과 장점은 다음과 같다.


## Svelte의 장점

-   Write less code — Svelte로 작성한 코드는 확실히 react, vue, angular 같은 다른 자바스크립트 기반의 프론트엔드 프레임워크 코드에 비해서 현저히 코드 길이가 적다.
-   No virtual DOM — Svelte는 가상돔을 사용하지 않고도 충분히 빠른 성능을 보여준다.
-   Truly reactive — Svelte는 데이터 뿐만 아니라 함수나 조건문 같은 코드에도 반응형 구현이 가능해서 코드를 굉장히 효율적으로 구현할 수 있다.

### Write less code
**Svelte**

```js
<script>
 let a = 1;
 let b = 2;
</script>

<input type="number" bind:value={a}>
<input type="number" bind:value={b}>
<p>{a} + {b} = {a + b}</p>

```

**React**

```js 
import React, { useState } from 'react';  
  
export default () => {  
  const [a, setA] = useState(1);  
  const [b, setB] = useState(2);  
  
  function handleChangeA(event) {  
    setA(+event.target.value);  
  }  
  
  function handleChangeB(event) {  
    setB(+event.target.value);  
  }  
  
  return (  
    <div>  
      <input type="number" value={a} onChange={handleChangeA}/>  
      <input type="number" value={b} onChange={handleChangeB}/>  
  
      <p>{a} + {b} = {a + b}</p>  
    </div>  
  );  
};
```

### No virtual DOM
HTML DOM은 트리구조로 되어 있어서 웹 화면에 요소가 많아지고 복잡도가 증가할 수록 끊임없이 연결된 트리구조를 갖게 되고, 웹 화면에 변경이 일어날 때 마다 이러한 트리구조의 갱신이 일어나야 하고 이 작업은 굉장히 큰 성능 저하를 가져오게 된다. 
React는 이러한 DOM의 문제를 개선하기 위해서 Virtual DOM(가상 돔) 개념을 제공한다.
가상의 DOM을 만들어서 메모리에서 처리를 한 후 실제 DOM과 동기화함으로써 기존 DOM이 가지고 있던 단점을 개선하고 웹에서도 고성능 애플리케이션을 구현할 수 있다.
Svelte는 Virtual DOM을 사용하지 않고도, 오버헤드 없이 충분히 빠르게 DOM을 갱신할 수 있다고 한다.

### Truly reactive
Vue 같은 프레임워크는 데이터와 DOM을 서로 연결 해서  한쪽에 변경사항이 발생하면 다른 한쪽에 바로 반영이 되는 반응성(reactive) 기능을 제공한다. 
Svelte는 함수선언, 조건문, 반복문 등 프로그래밍 코드까지 반응성(reactive) 기능을 사용할 수 있게 한다.  그래서  Svelte는 상태 관리 라이브러리가 필요없다

### 끝으로 
관심이 있다면 [Svelte tutorial](https://svelte.dev/tutorial/basics) 로 먼저 스벨트에 대해 알아보자 최근 회사에서 스벨트를 이용한 간단한 소개 페이지를 만들게 돼서 사용했는데 스벨트의 100%로를 사용했다고 볼 수없지만 빠른 빌드타임과 간결한 코드로 처음 써보는 프레임 워크인데도 불구하고 작업 속도가 상당히 빨랏다(Windi css와 같이 사용해서 그런것도 있음) 언제 또 트랜드가 바뀔지 모르지만 한번쯤 써보는걸 추천 한다. 
