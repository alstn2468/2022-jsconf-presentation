---
theme: geist
highlighter: shiki
favicon: 'images/favicon.ico'
fonts:
  mono: 'Noto Sans Mono'
---

# 프론트엔드에서 함수형을<br/>추구하면 안되는 걸까?

김민수, 이창희

<div class='pt-12'>
  <span @click='$slidev.nav.next' class='px-2 py-1 rounded cursor-pointer' hover='bg-white bg-opacity-10'>
    다음 페이지로 <carbon:arrow-right class='mt-8 inline-block'/>
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

<div class='flex mt-8'>
  <img class='mr-8 w-80 h-80' src='images/minsu.kim.png' />

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

<div class='flex mt-8'>
  <img class='mr-8 w-80 h-80' src='images/changhui.lee.png' />

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

<div class='relative mt-8'>
  <img class='h-80 rounded mx-auto' src='images/what-is-fp.png' />
  <mdi-close v-click class='slidev-vclick-target h-100 w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-700' />
</div>

---

# 함수형 프로그래밍이란?

<p class='text-xl my-8'>
  데이터를 수학적 <strong>계산 함수(순수 함수)</strong>로 처리하고<br/>
  <strong>사이드 이펙트를 멀리</strong>하는 프로그래밍 패러다임
</p>

<p class='text-xl mb-8 slidev-vclick-target' v-click='1'>
  프론트엔드 개발을 하면서 <strong>사이드 이펙트</strong>를 멀리할 수 있나요?<br/>
  <span class='text-orange-400'>DOM 조작, 데이터 패칭 모두 사이드 이펙트를 발생</span>시킬 것 같은데요?
</p>

<p class='text-xl slidev-vclick-target' v-click='2'>
  여러 방법을 통해 <strong>불순 함수</strong>와 <strong>순수 함수</strong>를 <strong>함께 관리</strong>하고<br/>
  이러한 <strong>함수들을 조합</strong>해 프로그램을 만드는 패러다임
</p>

---

# 팀에 함수형 프로그래밍 도입하기

<div class='flex items-center mt-8'>
  <img class='h-50 rounded' src='images/team-fp.png' />
  <div class='slidev-vclick-target flex items-center' v-click>
    <mdi-arrow-right-bold class='h-30 w-30 text-red-700' />
    <div class='text-center'>
      <img class='h-80 rounded mx-auto' src='images/team-study.png' />
      <p>팀 내부에서 함수형 프로그래밍에 대한 관심이 존재</p>
    </div>
  </div>
</div>

---

# 팀에 함수형 프로그래밍 도입하기

<div class='flex mt-8'>
  <div class='text-center flex flex-col'>
    <img class='h-70 rounded' src='images/many-input-form.png' />
    <p>진행하던 프로젝트에 <strong>복잡한 상태를 관리</strong>해야 하는 폼이 존재</p>
  </div>

  <div class='slidev-vclick-target flex items-center ml-8' v-click>
    <mdi-arrow-right-bold class='h-20 w-20 text-red-700' />
    <div class='flex flex-col justify-center ml-8'>
      <p class='m-0 mb-2'>하나의 폼에 <strong>8개의 입력</strong>이 존재</p>
      <p class='m-0 mb-2'>각각 <strong>다른 검증 로직</strong>이 존재</p>
      <p class='m-0 mb-2'><strong>공통으로 사용</strong>할 수 있는 검증 과정 존재</p>
    </div>
  </div>
</div>

---

# 팀에 함수형 프로그래밍 도입하기

<div class='flex items-center mt-8'>
  <div class='text-center flex flex-col'>
    <img class='h-40 rounded' src='images/fp-ts.png' />
    <p>fp-ts</p>
  </div>

  <ol class='ml-8 h-80 flex flex-col justify-center'>
    <li class='m-0 mb-2'>
      1. Haskell, PureScript, Scala 기반의 인기있는 <strong>타입 추상화</strong>를 제공
    </li>
    <li class='m-0 mb-2'>
      2. 구현된 타입 클래스는 <strong>안전하게 조합</strong>될 수 있도록 <strong>추상 대수학과 범주론에 기반</strong>
    </li>
    <li class='m-0 mb-2'>
      3. Typescript에서 지원하지 않는 <strong>HKT</strong>(Higher Kinded Types) 구현
    </li>
    <li class='m-0 mb-2'>
      4. io-ts 같이 사용할 수 있는 많음 라이브러리 또한 존재 (fp-ts/ecosystem)
    </li>
  </ol>
</div>

<div class='flex flex-col fixed bottom-6 right-10 text-xs'>
  <a class='text-gray-400 underline mb-1' href='https://github.com/gcanti/fp-ts' target='_blank'>
    https://github.com/gcanti/fp-ts
  </a>
  <a class='text-gray-400 underline mb-1' href='https://github.com/gcanti/io-ts' target='_blank'>
    https://github.com/gcanti/io-ts
  </a>
  <a class='text-gray-400 underline mb-1' href='https://github.com/gcanti/monocle-ts' target='_blank'>
    https://github.com/gcanti/monocle-ts
  </a>
  <a class='text-gray-400 underline mb-1' href='https://gcanti.github.io/fp-ts/ecosystem/' target='_blank'>
    https://gcanti.github.io/fp-ts/ecosystem/
  </a>
  <a class='text-gray-400 underline mb-1' href='https://www.cl.cam.ac.uk/~jdy22/papers/lightweight-higher-kinded-polymorphism.pdf' target='_blank'>
    Lightweight higher-kinded polymorphism
  </a>
</div>

---

# fp-ts의 타입 추상화

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>Option&lt;A></span>
</h2>

```ts
type None = { _tag: 'None' };
type Some<A> = { _tag: 'Some', value: A };
type Option<A> = None | Some<A>;
```

<div>
  <p class='mt-2 mb-2 text-normal'>
    <span class='bg-dark-400 font-mono'>Option&ltA></span>는 선택적인 값 <span class='bg-dark-400 font-mono'>A</span>를 위한 컨테이너 입니다.
  </p>
  <p class='mt-0 mb-2 text-normal'>
    <span class='bg-dark-400 font-mono'>A</span> 타입의 값이 존재한다면 <span class='bg-dark-400 font-mono'>Option&ltA></span>는 <span class='bg-dark-400 font-mono'>Some&ltA></span> 인스턴스입니다.<br/>
  </p>
  <p class='mt-0 mb-2 text-normal'>
    값이 존재하지 않는다면 <span class='bg-dark-400 font-mono'>Option&ltA></span>는 <span class='bg-dark-400 font-mono'>None</span> 인스턴스입니다.
  </p>

  <p class='mt-8 text-xl'>
    <span class='bg-dark-400 font-mono'>Option&ltA></span>는 <strong>실패할 수 있는 계산</strong>의 효과를 나타냅니다.
  </p>
</div>

---

# fp-ts의 타입 추상화

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>Option&lt;A></span>
</h2>

```ts
type None = { _tag: 'None' };
type Some<A> = { _tag: 'Some', value: A };
type Option<A> = None | Some<A>;
```

```ts {1|3-9|11-13}
import { Option, some, none } from 'fp-ts/lib/Option';

function findIndex<A>(
  as: Array<A>,
  predicate: (a: A) => boolean
): Option<number> {
  const index = as.findIndex(predicate);
  return index === -1 ? none : some(index);
}

const arr = [1, 2, 3];
findIndex(arr, (n) => n === 1); // { _tag: 'Some', value: 0 }
findIndex(arr, (n) => n === 4); // { _tag: 'None' }
```

---

# fp-ts의 타입 추상화

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>Option&lt;A></span>
</h2>

```ts
type None = { _tag: 'None' };
type Some<A> = { _tag: 'Some', value: A };
type Option<A> = None | Some<A>;
```

```ts {1|3-5}
import { fromNullable } from 'fp-ts/lib/Option';

fromNullable(undefined); // { _tag: 'None' }
fromNullable(null);      // { _tag: 'None' }
fromNullable(0);         // { _tag: 'Some', value: 0 }
```

---

# fp-ts의 타입 추상화

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>Option&lt;A></span>
</h2>

```ts
type None = { _tag: 'None' };
type Some<A> = { _tag: 'Some', value: A };
type Option<A> = None | Some<A>;
```

```ts {1|3-4|6-8}
import { fromPredicate } from 'fp-ts/lib/Option';

const isNumber = <T>(a: T) => !isNaN(Number(a));
const getOptionNumber = fromPredicate(isNumber);

getOptionNumber('a')   // { _tag: 'None' }
getOptionNumber('10'); // { _tag: 'Some', value: '10' }
getOptionNumber(1);    // { _tag: 'Some', value: 1 }
```

---

# fp-ts의 타입 추상화

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>Either&lt;E,A></span>
</h2>

---

# fp-ts의 타입 추상화

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>Task&lt;A></span> , <span class='bg-dark-400'>TaskEither&ltE,A></span>
</h2>

---

# fp-ts의 유틸 함수

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>pipe</span>
</h2>

---

# 타입 추상화를 사용하는 법

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>map</span>
</h2>

---

# 타입 추상화를 사용하는 법

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>chain</span>
</h2>

---

# 타입 추상화를 사용하는 법

<h2 class='mb-2 mt-8 inline-block font-mono'>
  <span class='bg-dark-400'>match</span> , <span class='bg-dark-400'>fold</span>
</h2>

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

```ts {all|1-2|4-21|23-28|31-37|39-44} {maxHeight: '450px'}
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
  <carbon:arrow-right class='mt-8 inline-block'/> 8개의 필드가 있다면, 16개의 상태와 8개의 이벤트 핸들러가 필요합니다.
</div>

---
layout: center
---

```ts {maxHeight: '450px'}
const [mobileNumber, setMobileNumber] = React.useState<string>('');
const [mobileNumberError, setMobileNumberError] = React.useState<string>('');
const [name, setName] = React.useState<string>('');
const [nameError, setNameError] = React.useState<string>('');
const [email, setEmail] = React.useState<string>('');
const [emailError, setEmailError] = React.useState<string>('');

const validateMobileNumber = (value: string): boolean => {
  /* ... */
};
const validateName = (value: string): boolean => {
  /* ... */
};
const validateEmail = (value: string): boolean => {
  /* ... */
};

const handleMobileNumberChange = (e) => {
  /* ... */
};
const handleNameChange = (e) => {
  /* ... */
};
const handleEmailChange = (e) => {
  /* ... */
};
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

```ts {all|5|6|7-14|8-12|6|13} {maxHeight: '450px'}
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

<div v-click>

```ts
const my_validator = validate(myMobileNumberRules, '잘못된 전화번호 형식입니다.');

my_validator('01012345678'); // right('01012345678')
my_validator('01aabb');      // left('잘못된 전화번호 형식입니다.')
```
</div>
---

# 검증 규칙 정의하기

```ts
const startsWith = (search: string): Predicate<string> => (text: string) => text.startsWith(search);

const minLength = (limit: number): Predicate<string> => (text: string) => text.length >= limit;

const maxLength = (limit: number): Predicate<string> => (text: string) => text.length <= limit;

const testPhoneNumberPattern = (text: string) => !/[^0-9]/gi.test(text);
```

<div v-click>

```ts
const myMobileNumer = '010123456';

testPhoneNumberPattern(myMobileNumer); // true
startsWith('01')(myMobileNumer);       // true
maxLength(11)(myMobileNumer);          // true
minLength(10)(myMobileNumer);          // false
```
</div>

---

# 입력 필드 검증기 만들기

```ts {all|5-19|6|7|8-18|all}
import { chain } from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';

export const validatePhoneNumber = (phoneNumber: string): Either<string, string> =>
  pipe(
    phoneNumber,
    validate([minLength(1)], '필수항목입니다.'), // 아무것도 입력되지 않았는지 검사합니다.
    chain(
      validate(
        [
          testPhoneNumberPattern, // 숫자 외에 다른 문자가 있는지 확인합니다.
          startsWith('01'),       // 휴대폰 번호는 01로 시작해야합니다.
          minLength(10),          // 휴대폰 번호의 길이는 최소 10자여야합니다.
          maxLength(11),          // 휴대폰 번호의 길이는 최대 11자여야합니다.
        ],
        '올바르지 않은 번호형식입니다.'
      )
    )
  );
```

<div v-after>

```ts
validatePhoneNumber('');            // left('필수항목입니다.');
validatePhoneNumber('012323abc');   // left('올바르지 않은 번호형식입니다.');
validatePhoneNumber('01012345678'); // right('01012345678');
```

</div>

---

# 커스텀 훅 만들기

```ts {all|10-11|12-13|15-18|20-33|22|23-30|24|25-29|31|35-48|50} {maxHeight: '450px'}
import * as Either from 'fp-ts/Either';
import * as string  from 'fp-ts/string';
import { identity, pipe } from 'fp-ts/function';

type StateValidator = {
  validate: () => boolean,
  error: string,
};

const useStateWithValidator = <T>(initialState: T, validator: (v: T) => Either<string, T>):
[T, (v: T, t?: boolean) => void, StateValidator] => {
  const [value, setValue] = useState<T>(initialState);
  const [error, setError] = useState('');

  const changeError = (e: string) => {
    setError(e);
    return e;
  };

  const changeValue = (v: T) => {
    pipe(
      validator(v),
      Either.match(
        identity,
        () => pipe(
          v,
          setValue,
          () => string.empty,
        ),
      ),
      changeError,
    );
  };

  const stateValidator: StateValidator = {
    validate(): boolean {
      return pipe(
        validator(value),
        Either.match(identity, () => string.empty),
        changeError,
        string.isEmpty,
      );
    },

    get error(): string {
      return error;
    },
  };

  return [value, changeValue, stateValidator];
};
```

---

# 기존 코드 개선하기

```ts {all|1-21} {maxHeight: '450px'}
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

# 기존 코드 개선하기

```ts {1|3-7} {height: '200px'}
const [mobileNumber, setMobileNumber, mobileNumberValidator] = useStateWithValidator<string>('', validatePhoneNumber);

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

# 기존 코드 개선하기

```ts {3-4|6-13} {maxHeight: '450px'}
const [mobileNumber, setMobileNumber, mobileNumberValidator] = useStateWithValidator<string>('', validatePhoneNumber);

// 휴대폰 번호 input의 onChange 이벤트 핸들러
const handleMobileNumberChange = (e) => setPhoneNumber(e.target.value);

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

# 기존 코드 개선하기

```ts {6-19|21-26} {maxHeight: '450px'}
const [mobileNumber, setMobileNumber, mobileNumberValidator] = useStateWithValidator<string>('', validatePhoneNumber);

// 휴대폰 번호 input의 onChange 이벤트 핸들러
const handleMobileNumberChange = (e) => setPhoneNumber(e.target.value);

// form onsubmit 이벤트 핸들러
const onSubmit = () => {
  const validators = [phoneNumberValidator, ...];
  const isInvalid = validators
      .map((validator) => validator.validate())
      .some((valid) => !valid);

  if (isInvalid) {
    // Do something when input is invalid
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

```ts {21-27|all} {maxHeight: '450px'}
const [mobileNumber, setMobileNumber, mobileNumberValidator] = useStateWithValidator<string>('', validatePhoneNumber);

// 휴대폰 번호 input의 onChange 이벤트 핸들러
const handleMobileNumberChange = (e) => setPhoneNumber(e.target.value);

// form onsubmit 이벤트 핸들러
const onSubmit = () => {
  const validators = [phoneNumberValidator, ...];
  const isInvalid = validators
      .map((validator) => validator.validate())
      .some((valid) => !valid);

  if (isInvalid) {
    // Do something when input is invalid
    return;
  }

  // Submit Form ...
}

return (
  ...
  <input onChange={handleMobileNumberChange} value={mobileNumber} />
  <span className="error">{mobileNumberValidator.error}</span>
  ...
)

```

---

# 정리

<ul class="list-disc ml-6 text-lg">
  <li>함수형 프로그래밍이 대충 무엇인지</li>
  <li>fp-ts에 어떤 타입과 유틸리티 함수가 존재하고 어떻게 쓰는지</li>
  <li>값 검증에 필요한 로직들을 fp-ts를 사용해 함수형으로 추상화하는 방법</li>
  <li>공통 부분 문제를 해결하는 함수와 커스텀 훅을 만들어 사용하는 입장에서의 구현을 단순화 하는 방법</li>
</ul>
---
layout: two-cols
---

## 좋았던 점

<ul class="list-disc ml-6 text-lg">
  <li>대수적 타입(ADT)를 사용하여 문제를 더 잘 정의하고 해결할 수 있었음</li>
  <li>코드를 작성하며 함수형 사고를 하게 됨</li>
  <ul class="list-disc ml-6 text-lg">
    <li>과연 이 함수에서 이 일을 하는 것이 옳을까?</li>
    <li>사이드 이펙트 최소화 하기</li>
  </ul>
  <li>팀에서 새로운 기술이나 개념을 도입할 때 어떻게 해야할지 알게 됨</li>
</ul>

::right::

## 아쉬웠던 점

<ul class="list-disc ml-6 text-lg">
  <li>fp-ts를 써보지 않았거나 혹은 함수형 프로그래밍 경험이 없다면, 코드 작성에 어려움을 겪을수도 있음</li>
  <li>함수형 프로그래밍을 적용하지 않고 그냥 작성하는 코드가더 가독성이 좋고 짧은 경우도 있었음</li>
  <ul class="list-disc ml-6 text-lg">
    <li>예) Array 데이터를 사용하여 컴포넌트로 매핑하는 코드</li>
  </ul>
  <li>최신 자료가 많지 않다</li>
  <ul class="list-disc ml-6 text-lg">
    <li>fp-ts 메인테이너가 작성한 글이 있지만, 오래되어 outdated 된 내용이 많음</li>
  </ul>
  <li>fp-ts 문서가 친절한 편은 아니다.</li>
</ul>