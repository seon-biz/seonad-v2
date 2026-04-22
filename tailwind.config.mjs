/** @type {import('tailwindcss').Config} */
/**
 * 세온애드 Tailwind 설정 — 01-foundation.md 디자인 토큰 주입
 *
 * 원칙
 * - 코드에서 HEX/px을 직접 쓰지 않는다. 반드시 여기 정의된 토큰명으로만 참조.
 * - 타입 스케일(text-*)은 CSS 변수(global.css)를 참조하여 모바일/데스크톱 자동 스케일.
 * - 브레이크포인트: foundation 정의와 일치 (sm 480 / md 768 / lg 1024 / xl 1280 / 2xl 1440).
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        // Core — Deep Navy
        navy: {
          950: '#0A1224',
          900: '#0F1A33',
          800: '#162445',
          700: '#1E2F5A',
          600: '#2A3F72',
          500: '#425C94',
          400: '#6B83B8',
        },
        // Core — Gold
        gold: {
          600: '#A37B2E',
          500: '#C89B3C',
          400: '#D9B368',
          300: '#E8CD97',
          100: '#F5EAD1',
        },
        // Neutral — Ink (라이트 배경 위 텍스트)
        ink: {
          900: '#111418',
          700: '#2B313B',
          500: '#5B6471',
          300: '#A8AEB8',
        },
        // Neutral — Paper (라이트 섹션 배경)
        paper: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F5EF',
        },
        cream: '#F0EADA',
        // 다크 배경 위 본문 텍스트 — A11y 최소 기준 (foundation §11)
        'on-dark': '#E6EAF2',
        'on-dark-soft': '#C8CEDA',
        // 푸터 전용 — 네이비 950보다 한 단계 더 깊게
        'footer-deep': '#07101E',
        // Semantic — 네이버 그린 차별화 확보
        success: '#3F8F5A',
        warning: '#C88A2E',
        danger: '#B84A3E',
        info: '#3E6FB8',
      },
      fontFamily: {
        sans: [
          '"Pretendard Variable"',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        serif: ['"Noto Serif KR"', '"Nanum Myeongjo"', 'serif'],
        mono: ['"JetBrains Mono"', '"D2Coding"', 'ui-monospace', 'monospace'],
      },
      /*
       * 타입 스케일은 CSS 변수로 참조한다.
       * global.css에서 모바일은 0.85배(히어로·넘버는 0.6배), lg 이상에서 데스크톱 값으로 자동 전환.
       * 최소 본문 크기는 15px 이하로 내려가지 않도록 global.css에서 보장.
       */
      fontSize: {
        hero: [
          'var(--text-hero)',
          { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' },
        ],
        h1: [
          'var(--text-h1)',
          { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.02em' },
        ],
        h2: [
          'var(--text-h2)',
          { lineHeight: '1.25', fontWeight: '700', letterSpacing: '-0.02em' },
        ],
        h3: [
          'var(--text-h3)',
          { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.02em' },
        ],
        h4: [
          'var(--text-h4)',
          { lineHeight: '1.35', fontWeight: '600', letterSpacing: '-0.01em' },
        ],
        lead: [
          'var(--text-lead)',
          { lineHeight: '1.6', fontWeight: '400', letterSpacing: '-0.01em' },
        ],
        body: [
          'var(--text-body)',
          { lineHeight: '1.7', fontWeight: '400', letterSpacing: '-0.01em' },
        ],
        'body-sm': [
          'var(--text-body-sm)',
          { lineHeight: '1.65', fontWeight: '400', letterSpacing: '-0.01em' },
        ],
        caption: [
          'var(--text-caption)',
          { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0' },
        ],
        'number-xl': [
          'var(--text-number-xl)',
          { lineHeight: '1', fontWeight: '700', letterSpacing: '-0.04em' },
        ],
        'number-lg': [
          'var(--text-number-lg)',
          { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.04em' },
        ],
      },
      letterSpacing: {
        'kr-body': '-0.01em',
        'kr-heading': '-0.02em',
        'kr-number': '-0.04em',
        // 히어로 상단 라벨, 섹션 Eyebrow 같은 곳에서 쓰는 확장 자간
        eyebrow: '0.12em',
        caption: '0.04em',
      },
      /*
       * 스페이싱 토큰 — foundation §3 (8px 기반)
       * Tailwind 기본 스케일(1~4)은 값이 일치하므로 충돌 없이 덮어쓰지 않는다.
       * 5~11은 별도 sp-* 프리픽스로 추가해 Tailwind 기본 유틸(h-11=44px 등)을 보존한다.
       */
      spacing: {
        'sp-1': '4px',
        'sp-2': '8px',
        'sp-3': '12px',
        'sp-4': '16px',
        'sp-5': '24px',
        'sp-6': '32px',
        'sp-7': '48px',
        'sp-8': '64px',
        'sp-9': '96px',
        'sp-10': '128px',
        'sp-11': '160px',
        'gutter-mobile': '20px',
        'gutter-desktop': '32px',
        // 터치 타겟 최소치 — foundation §10
        'touch-min': '44px',
      },
      maxWidth: {
        'container-narrow': '760px',
        'container-max': '1200px',
        'container-wide': '1440px',
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
        // full은 Tailwind 기본(9999px) 그대로 사용
      },
      borderWidth: {
        thin: '1px',
        base: '2px',
        thick: '4px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(10, 18, 36, 0.06)',
        sm: '0 4px 12px rgba(10, 18, 36, 0.08)',
        md: '0 12px 32px rgba(10, 18, 36, 0.12)',
        lg: '0 24px 64px rgba(10, 18, 36, 0.18)',
        // 히어로 CTA 호버 전용 — foundation §6
        gold: '0 8px 24px rgba(200, 155, 60, 0.35)',
        // 다크 섹션 카드용 은은한 골드 인너 테두리 느낌 (선택)
        'gold-ring': 'inset 0 0 0 1px rgba(200, 155, 60, 0.18)',
      },
      zIndex: {
        base: '0',
        raised: '10',
        'sticky-cta': '40',
        header: '50',
        overlay: '80',
        modal: '90',
        toast: '100',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
        exit: 'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
        scroll: '600ms',
      },
      // 섹션 스크롤 페이드(translateY 24px) — foundation §8
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.4, 0, 0.2, 1) both',
      },
      outlineOffset: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
