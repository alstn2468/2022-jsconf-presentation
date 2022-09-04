---
theme: geist
lineNumbers: true
favicon: './images/favicon.ico'
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

![minsu.kim](./images/minsu.kim.png)

<ul>
  <li>김민수</li>
  <li>데브시스터즈, Software Engineer (Frontend Engineer)</li>
  <li>JavaScript, TypeScript, ReactJS, GatsbyJS, GraphQL, Functional Programming, etc…</li>
  <li><carbon-logo-github /> alstn2468</li>
  <li><carbon-logo-instagram /> minsu.\_.0102</li>
  <li><carbon-logo-linkedin /> minsu-kim-developer</li>
  <li><carbon-rss /> https://alstn2468.github.io</li>
</ul>

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
