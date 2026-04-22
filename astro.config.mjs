import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seonad.co.kr',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      /**
       * sitemap 필터
       *  - /contact : 301 리다이렉트 → 제외
       *  - /blog    : 플레이스홀더 (noindex) → 제외
       *  - /legal/* : 09-legal.md §0-3 에 따라 법적 의무 문서로 index,follow 허용 → 포함
       */
      filter: (page) =>
        !page.includes('/contact') &&
        !page.endsWith('/blog/') &&
        !page.endsWith('/blog'),
    }),
  ],
  image: {
    domains: ['seonad.co.kr'],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  /*
   * 08-about.md — About 페이지 §6~§7 이 3채널 카드 + 문의 폼을 통합했기
   * 때문에 별도 /contact 페이지는 제거. 과거 유입·외부 링크 보호를 위해
   * /about#contact-form 으로 301 리다이렉트.
   *
   * Astro 정적 리다이렉트는 HTML meta refresh + canonical 링크로 생성되며,
   * Cloudflare Pages / Netlify 의 _redirects 파일 생성도 build 어댑터가 지원.
   */
  redirects: {
    '/contact': {
      status: 301,
      destination: '/about#contact-form',
    },
  },
});
