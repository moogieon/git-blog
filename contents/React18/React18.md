---
date: '2022-04-05'
title: 'React18 변경사항'
categories: ["React"]
summary: 'React18에 새롭게 추가된 사항을 간단히 살펴보자!'
thumbnail: './React18.png'
---

## React 18

### automatic batching

- 배칭(batching)은 리액트가 더 나은 성능을 위해 여러개의 state(상태) 업데이트를  하나의
  re-render 가 발생하도록 그룹화 하는 것을 의미한다.
- ```js
  const [count, setCount] = useState(0)
  // 아직 리렌더링 X setFlag(f => !f);
  const [flag, setFlag] = useState(false)
  // 아직 리렌더링 X
  function handleClick() {
    setCount(c => c + 1)
    // React는 함수가 끝나면 리렌더링   할 것이다 (-> 이것이 배칭)
  }
  ```

  • React 18부터 [createRoot](https://github.com/reactwg/react-18/discussions/5)를 통해, 모든 업데이트들은 어디서 왔는가와 무관하게 자동으로 배칭된다.

### startTransition

- 각 상태 업데이트에 대한 우선순위를 정해줄 수 있다.
```typescript
  import { startTransition } from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
// Transition: Show the results
setSearchQuery(input);
});
```

• `startTransition` 으로 둘러싸인 부분은 클릭이나 키 입력에 의해 우선순위 높은 상태 업데이트가 발생하게 되면 렌더링 업데이트가 중단되고 키 입력이 다 끝난 이후의 업데이트만 발생하게 된다.

• `useTransition` 훅을 이용해 `<Spinner/>`와 같은 UI를 표시해줄 수 있습니다.

```js
import { useTransition } from 'react';

const [isPending, startTransition] = useTransition();
...
{isPending && <Spinner />}
...
```

• 크게 리엑트가 UI 업데이트를 위해 크고 복잡한 일을 함으로 써 대기 시간이 발생하거나 느린 네트워크 환경에서 데이터를 받아오기 위해 기다리는 상황에서 사용한다고 한다.

### new Suspense SSR Architecture

 • 만약에 4번이 관련된 리소스가 커서 로드되는데 오래걸린다면, 1, 2, 3도 4번이 로드될때까지 꼼짝없이 기다려야 된다.

 •`<Suspense>` 는 전체 페이지를 각각의 작은 청크로 나누어 렌더링할 수 있게 도와준다.
  응답을 받는데 오래걸리는 컴포넌트에는 `<Suspense>`를 사용해 나머지 영역의 초기 렌더링 속도에 영향을 미치지 않게 할 수 있다.
