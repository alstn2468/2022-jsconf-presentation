import { defineConfig, HtmlTagDescriptor } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const metaDatas = [
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:image',
    content: '/images/og.png',
  },
  {
    property: 'og:title',
    content: '프론트엔드에서 함수형을 추구하면 안되는 걸까?',
  },
  {
    property: 'og:description',
    content: '함수형 프로그래밍에 대한 이론과 프론트엔드 개발을 하면서 함수형 프로그래밍을 적용한 사례를 소개합니다.',
  },
];

const generateMetaTag = (meta: typeof metaDatas[number]): HtmlTagDescriptor => ({
  injectTo: 'head-prepend',
  tag: 'meta',
  attrs: { ...meta },
});

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        tags: metaDatas.map(generateMetaTag),
      },
    }),
  ],
})