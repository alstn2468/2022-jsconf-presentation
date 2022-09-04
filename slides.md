---
theme: geist
lineNumbers: true
favicon: 'images/favicon.ico'
---

# 프론트엔드에서 함수형을<br/>추구하면 안되는 걸까?

김민수, 이창희

<div class='pt-12'>
  <span @click='$slidev.nav.next' class='px-2 py-1 rounded cursor-pointer' hover='bg-white bg-opacity-10'>
    다음 페이지로 <carbon:arrow-right class='inline'/>
  </span>
</div>

<div class='abs-br m-6 flex gap-2'>
  <a
    href='https://github.com/alstn2468/2022-jsconf-presentation'
    target='_blank'
    alt='GitHub'
    class='text-xl icon-btn text-white !border-none'
  >
    <carbon-logo-github />
  </a>
</div>

---

# 자기소개

<div class='flex'>
  <img class='mr-8' src='images/minsu.kim.png' />

  <div class='flex flex-col justify-between'>
    <div>
      <p class='text-3xl font-bold my-0 mb-4'>김민수</p>
      <p class='text-2xl my-0 mb-2'>
        데브시스터즈<br/>
        Software Engineer <span class='text-sm text-light-100'>(Frontend Engineer)</span>
      </p>
      <p class='text-base font-light my-0 mb-2 text-gray-400'>
        JavaScript, TypeScript, ReactJS, GatsbyJS,<br/>
        GraphQL, Functional Programming, …
      </p>
    </div>
    <ul>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-logo-github />
        <span class='ml-2'>alstn2468</span>
      </li>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-logo-instagram />
        <span class='ml-2'>minsu._.0102</span>
      </li>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-logo-linkedin />
        <span class='ml-2'>minsu-kim-developer</span>
      </li>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-rss />
        <span class='ml-2'>https://alstn2468.github.io</span>
      </li>
    </ul>
  </div>
</div>

---

# 자기소개

<div class='flex'>
  <img class='mr-8' src='images/changhui.lee.png' />

  <div class='flex flex-col justify-between'>
    <div>
      <p class='text-3xl font-bold my-0 mb-4'>이창희</p>
      <p class='text-2xl my-0 mb-2'>
        前 데브시스터즈<br/>
        Software Engineer <span class='text-sm text-light-100'>(Frontend/Backend Engineer)</span>
      </p>
      <p class='text-base font-light my-0 mb-2 text-gray-400'>
        JavaScript, TypeScript, Golang, Python, …
      </p>
    </div>
    <ul>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-logo-github />
        <span class='ml-2'>blurfx</span>
      </li>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-logo-instagram />
        <span class='ml-2'>blureffect</span>
      </li>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-logo-linkedin />
        <span class='ml-2'>blurfx</span>
      </li>
      <li class='my-0 mb-0.5 text-sm'>
        <carbon-rss />
        <span class='ml-2'>https://xo.dev</span>
      </li>
    </ul>
  </div>
</div>

---

# 함수형 프로그래밍이란?

<div class='relative'>
  <img class='h-80 rounded mx-auto mt-10' src='images/what-is-fp.png' />
</div>

---

# 함수형 프로그래밍이란?

<div class='relative'>
  <img class='h-80 rounded mx-auto mt-10' src='images/what-is-fp.png' />
  <mdi-close class='h-100 w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-700' />
</div>

---

# 현실의 문제 해결 하기

폼에 8개의 입력이 존재하는데, 이를 어떻게 우아하게 처리할 수 있을까?

<img src="/images/part2-1.png" class="m-5 h-80 rounded shadow" />

---

# 우리가 폼에서 해야하는 일

1. 사용자에게 값 입력받기
2. 입력된 값 검증하기
3. 검증에 실패했다면 오류 메시지 보여주기


<img src="/images/part2-2.png" class="m-5 h-60 rounded shadow" />

---

```ts {all|1-2|4-21|23-28|31-37|39-44} {maxHeight: 200}
const [mobileNumber, setMobileNumber] = React.useState<string>('');
const [mobileNumberError, setMobileNumberError] = React.useState<string>('');

// 올바른 형식의 휴대폰 번호인지 검증하는 함수
const validateMobileNumber = (value: string): boolean => {
  if (value == '') {
    setMobileNumberError('휴대폰 번호를 입력해주세요.');
    return false;
  }

  if (!mobileNumberRegex.test(value)
      || !value.startswith('01')
      || value.length < 10
      || value.length > 11
  ) {
    setMobileNumberError('휴대폰 번호가 올바르지 않습니다.');
    return false;
  }

  return true;
}

// 휴대폰 번호 input의 onChange 이벤트 핸들러
const handleMobileNumberChange = (e) => {
  const { value } = e.target;
  validateMobileNumber(value);
  setMobileNumber(value);
}

// form onsubmit 이벤트 핸들러
const onSubmit = () => {
  const validations = [validateMobileNumber(mobileNumber), ...];
  if (validations.some((valid) => !valid)) {
    return;
  }
  // Submit Form ...
}

return (
  ...
  <input onChange={handleMobileNumberChange} value={mobileNumber} />
  <span className="error">{mobileNumberError}</span>
  ...
)

```

---

# 현재 상태

### 검증 가능한 입력 필드 하나를 구현하기 위해 우리는 아래의 것들이 필요합니다.

<ul class="list-disc ml-6 text-xl">
  <li>2개의 React.useState (입력 값, 오류 메시지)</li>
  <li>1개의 필드 검증 함수</li>
  <li>검증 함수를 호출하고 입력 값 상태를 관리하는 1개의 이벤트 핸들러 콜백 함수</li>
</ul>

<div v-click class="text-xl mt-8 font-bold">
  <carbon:arrow-right class='inline'/> 8개의 필드가 있다면, 16개의 상태와 8개의 이벤트 핸들러가 필요합니다.
</div>

---
layout: center
---

```ts
const [mobileNumber, setMobileNumber] = React.useState<string>('');
const [mobileNumberError, setMobileNumberError] = React.useState<string>('');
const [name, setName] = React.useState<string>('');
const [nameError, setNameError] = React.useState<string>('');
const [email, setEmail] = React.useState<string>('');
const [emailError, setEmailError] = React.useState<string>('');

const validateMobileNumber = (value: string): boolean => { /* ... */ }
const validateName = (value: string): boolean => { /* ... */ }
const validateEmail = (value: string): boolean => { /* ... */ }

const handleMobileNumberChange = (e) => { /* ... */ }
const handleNameChange = (e) => { /* ... */ }
const handleEmailChange = (e) => { /* ... */ }
```

---
layout: center
---
<span class="text-8xl">🤔</span>
---

# 솔루션?

## 1. React-Hook-Form
## 2. Formik

<h2 v-click>3. fp-ts</h2>

---

# 공통 부분 문제 찾기

<ol class="list-decimal ml-6 text-2xl">
  <li>입력 값과 오류 메시지를 관리하는 두 개의 상태가 있습니다.</li>
  <li>사용자가 값을 입력하면 상태를 갱신합니다.</li>
  <li>검증 함수를 통해 사용자가 입력한 값이 올바른지 검증합니다.</li>
  <li>검증에 오류가 있다면 오류 메시지 상태를 갱신합니다.</li>
</ol>

---

# 공통 부분 문제 찾기

<ol class="list-decimal ml-6 text-2xl">
  <li><span class="text-orange-500/90 font-bold">입력 값</span>과 <span class="text-orange-500/90 font-bold">오류 메시지</span>를 관리하는 두 개의 상태가 있습니다.</li>
  <li>사용자가 값을 입력하면 상태를 갱신합니다.</li>
  <li><span class="text-orange-500/90 font-bold">검증 함수</span>를 통해 사용자가 입력한 값이 올바른지 검증합니다.</li>
  <li>검증에 오류가 있다면 오류 메시지 상태를 갱신합니다.</li>
</ol>

---

# 문제 해결 하기

<ol class="list-decimal ml-6 text-2xl">
  <li>공통적으로 사용할 수 있는 검증 함수 만들기</li>
  <li>검증 규칙 정의하기</li>
  <li>입력 필드 검증기 만들기</li>
  <li>커스텀 훅 만들기</li>
</ol>

---

# 공통 검증 함수 만들기

<br>

```ts {all|5|6|7-14|8-12|6|13}
import { fromPredicate } from 'fp-ts/Either';
import { pipe, type Predicate } from 'fp-ts/function';
import { every, map } from 'fp-ts/Array';

const validate = <T>(validators: Array<Predicate<T>>, errorMessage: string) => (value: T) => pipe(
  value,
  fromPredicate(
    (val) => pipe(
      validators,
      map(fn => fn(val)),
      every(Boolean),
    ),
    () => errorMessage,
  ),
);
```

---