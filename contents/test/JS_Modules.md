---
date: '2022-04-04'
title: 'ESM과 CommonJS'
categories: ['ESM', 'CommonJS', 'Module']
summary: '자바스크립트 모듈 시스템: ESM과 CommonJS'
thumbnail: './module.png'
---

## CommonJS, ESM 차이 
함수들끼리 데이터를 공유하고 싶다면 전역 스코프에 해당 데이터를 둔다면 다른 내부 요소에 의해 망가질 수도 있고, 순서가 뒤엉켜 전역 스코프의 요소가 존재하지 않을 수도 있다.
모듈이라는 방식을 이용하면 각각 필요한 모듈을 import하여 사용함으로써 어디에서 에러가 나는지 파악하기 쉽다.
import, export 하는 시스템을 모듈 시스템이라 하는데 현재 2가지의 모듈 시스템이 활발하게 사용되고 있다.
  -   **CommonJS** 
  -   **ES modules**


### CommonJS
#### **동기식**
-   require가 동기로 이루어지므로 promise를 return 하지 않는다.
-   따라서 CommonJS는 실행해보아야 import, export 에러를 감지할 수 있다.
-   기본 값이다.
-   top-level await가 불가능하다. (`async function` 밖에서 `await`을 사용하게 해주는 것)
-   export, import하는 변수가 다르다.

``` js
const module = require('어쩌구');
const { func } = require('어쩌구');
module.exports = '어쩌구'; // default exports module.exports.func = () => {}; // named exports
```


### ES modules 
#### **비동기식**
-   모듈을 비동기 환경에서 다운로드하며, import export 구문을 찾아서 파싱한다.
-   따라서 ES modules는 실행해보지 않아도 import, export 에러를 감지할 수 있다.
-   config를 type="module" 로 set 해주어야 사용할 수 있다.
-   top-level await가 가능하다.(`async function` 밖에서 `await`을 사용하게 해주는 것)
-  export와 import를 같은 변수에 실제 값으로 채운다.
``` js
import a from '어쩌구';
import {func} from '어쩌구';
export const a = '어쩌구'; // default exports export default func = () => {}; // named exports
```

### 동작 방식

#### CommonJS
(module.exports, exports, require)
***module.exports:***
자바스크립트에서는 변수에 모든 형태의 데이터를 넣을 수 있기 때문에 module.exports도 값으로 허용되는 모든 데이터를 export 할 수 있다
```js
const PI = 3.14;
module.exports.PI = P.I

const utils = require('./utils');
console.log(utils.PI); /

```
**exports:**
exports도 module.exports와 같은 동작을 수행 
(실제적으로는 exports는 module.exports의 데이터를 참조하고)

```js
exports.PI = 3.14;
console.log(module.exports === exports); // true
console.log(exports); // { PI: 3.14 }
```
**require:**
다른 모듈 파일을 볼러오는 명령어 상대경로’에 있는 파일 중 확장자가 .js, .json, .node 인 파일을 모듈로 불러올 수 있다.
```js
{ "data":"Hello World!"}
module.exports.PI

const data = require('./data');
const utils = require('./utils');
console.log(data); // { data: "Hello World!" }
console.log(utils.PI); // 
```


- Node.js는 상대경로(./, ../)나 절대경로(/)로 모듈을 호출하면 다음과 같은 순서로 필요한 파일을 탐색하는데,첫 번째와 두 번째에서 파일 탐색에 실패하면 Cannot find module 에러를 던짐
- Node.js에서 상대경로(./, ../)나 절대경로(/)를 표시하지 않고 require를 호출하면 Node.js는 현재 모듈의 최상위 디렉토리에서 부터 /node_modules 폴더를 탐색

#### ES modules 
(export, import)
 **export:**
 export는 기본적으로 named export와 default export의 두 가지 방식과 export와 from을 조합해서 사용하는 방식이있다.
 ##### named export은
 - 선언된 변수명을 그대로 export하는 방식 
 - 변수를 선언함과 동시에 내보내기를 할 수도 있다 
 - 변수들을 모아서 내보내거나, 먼저 정의된 함수를 별칭으로 바꿔서 내보낼 수도 있다. 
 ```js
export let name1;
export const name2;
export var name3;
export function name4 () {/*...*/}
export class MyClass {/*...*/}

const var1;
let var2;
var var3;
export { var1, var2, var3}
```
 
 ##### default export은
 - 모듈에서 하나만 존재할 수 있다.
 - 변수를 직접 내보낼 수는 없다.
 - export default {const, let, var} 처럼 변수를 직접 내보내는 방식으로 사용하면 에러가 발생
 ```js
export default expression;
export default function () { /*...*/ }            // 익명함수
export default function myFunction() { /*...*/ } // 기명함수
export default class { /*...*/ }                  // 클래스
export default class MyClass { /*...*/ }          // 커스텀 클래스
export default function* () { /*...*/ }           // 제너레이터
// named export 처럼 묶어서 내보내기
const myModule = { /*...*/ }
const var1 = () => {}
```
 #####  export-from은
  - import와 export를 한 번에 처리할 수 있는 문법
  - 주로 패키지의 다른 모듈들을 한 번에 모아서 일관된 형태로 내보내거나 관리하고 싶은 경우에 사용
  -  식별자가 바인딩 되지 않기 때문에 메서드나 변수에 직접 접근하면 에러가 발생
  	 (에러가 발생하는 이유는 해당 메서드가 스코프내에 존재하지 않기 때문)
```js 
// math 모듈에서 일부만 import 한 뒤 다시 export
export { add, subtract } from './math';
// config 모듈의 (export가 가능한)모든 변수를 export
export * from './config';
// logger 모듈의 default export를 Logger라는 이름으로 export
export { default as Logger } from './logger';
```
**import:**
import는 다른 파일에서 모듈을 불러오는 명령어
as 명령어를 이용해서 별칭으로 불러오거나, *를 사용해서 named export의 모든 변수와 메서드를 불러올 수도 있다.
### 실제 사용

React에서는 ESModules을 주로 사용한다. 패키지 모듈들은 결국 CommonJS를 기본 모듈 시스템으로 선택하기 때문에, 코드 작성 시 CommonJS로 변환해주어야 하는데 해당 작업은 번들러인 Babel이 수행한다.
Vite부터가 브라우저가 ESM Import를 해석할 수 있다는 전제 하에 만들어진 물건
[https://runebook.dev/ko/docs/babel/babel-plugin-transform-modules-commonjs/index](https://runebook.dev/ko/docs/babel/babel-plugin-transform-modules-commonjs/index)

### 정리
 모듈 시스템 중 CommonJS가 처음에 등장하였으나, 현재는 ES modules 모듈 시스템이 많이 사용되고 있다. CommonJS와 비교하여 ES modules는 비동기로 동작하여 속도가 빠르고 실제 사용되는 부분만을 import(tree shaking) 하여 메모리를 적게 차지하며 가독성이 좋고 순환 의존성을 지원한다는 이점이 있다.
 %%ESM은 ECMAScript에서 지원하는 자바스크립트 공식 모듈 시스템이지만
 브라우저에 따라서는 아직 import와 export를 지원하지 않는 경우도 있어서 가능하면 webpack과 같은 번들러를 사용하는 것%%
 
 [https://nodejs.org/api/packages.html#determining-module-system](https://nodejs.org/api/packages.html#determining-module-system "https://nodejs.org/api/packages.html#determining-module-system") 여기 보시면 .mjs랑 .cjs 관련 내용이 나오는데
 이 확장자들을 사용하면 "type": "module" 안에서도 CommonJS를 쓸 수 있고 "type": "commonjs" 안에서도 ESM을 쓸 수 있다
 
 이전까지는 ESM 문법을 쓰더라도 Webpack 같은 게 전부 CJS로 변환해버렸을
 
 
 
 
 ➕➕ CJS 패키지에서는 ESM을 못 `require()` 하기 때문에 ESM 패키지에서 CJS 패키지를 사용하는데 CJS 패키지가 읽을 설정 파일 같은 걸 만든다 하면 .cjs 확장자로 만들어야 한다