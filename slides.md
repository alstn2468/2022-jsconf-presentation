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
  <img class='h-80 rounded mx-auto' src='images/what-is-fp.png' />
  <mdi-close v-click class='slidev-vclick-target h-100 w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-700' />
</div>

---

# 함수형 프로그래밍이란?

<p class='text-xl mb-8'>
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

<div class='flex items-center'>
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

<div class='flex'>
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

<div class='flex items-center'>
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

# 현실의 문제 해결 하기

폼에 8개의 입력이 존재하는데, 이를 어떻게 우아하게 처리할 수 있을까?

<!-- ![aa](./images/reality-problem-1.png) -->

---

# 우리가 폼에서 해야하는 일

1. 사용자에게 값 입력받기
2. 입력된 값 검증하기
3. 검증에 실패했다면 오류 메시지 봉

<!-- ![bb](/images/reality-problem-2.png) -->

---
