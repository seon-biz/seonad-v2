# 01. Foundation — 세온애드 디자인 토큰

세온애드(SEONAD) 웹사이트 전체에서 사용하는 **디자인 토큰**을 정의한다.
이후 모든 MD 파일(02~09)과 바이브 코딩 작업은 이 토큰을 **유일한 기준**으로 참조한다.

- **법인**: 주식회사 티오엠
- **도메인**: seonad.co.kr
- **톤**: 프리미엄 교육 브랜드 / 묵직·신뢰·클래식
- **금지**: 네이버 그린 계열 일체 사용 금지 (브랜드 오인 방지)

---

## 1. 컬러 토큰

### 1-1. Core Palette — 딥 네이비 + 골드

| 토큰명 | HEX | 용도 |
|---|---|---|
| `--color-navy-950` | `#0A1224` | 최상위 배경 (히어로, 풀블리드 섹션) |
| `--color-navy-900` | `#0F1A33` | 메인 배경 |
| `--color-navy-800` | `#162445` | 카드·섹션 배경 (한 단계 올림) |
| `--color-navy-700` | `#1E2F5A` | 호버·액티브 배경 |
| `--color-navy-600` | `#2A3F72` | 테두리, 디바이더 |
| `--color-navy-500` | `#425C94` | 보조 텍스트 (다크 배경 위) |
| `--color-navy-400` | `#6B83B8` | 비활성 텍스트 |

| 토큰명 | HEX | 용도 |
|---|---|---|
| `--color-gold-600` | `#A37B2E` | 골드 딥 (호버·눌림 상태) |
| `--color-gold-500` | `#C89B3C` | **Primary 골드** (CTA, 강조 숫자, 포인트) |
| `--color-gold-400` | `#D9B368` | 골드 라이트 (보조 강조, 배지) |
| `--color-gold-300` | `#E8CD97` | 골드 페일 (라이트 배경 위 하이라이트) |
| `--color-gold-100` | `#F5EAD1` | 골드 틴트 (라이트 배경) |

### 1-2. Neutral — 본문·표면

| 토큰명 | HEX | 용도 |
|---|---|---|
| `--color-ink-900` | `#111418` | 라이트 배경 위 본문 텍스트 |
| `--color-ink-700` | `#2B313B` | 라이트 배경 위 부제목 |
| `--color-ink-500` | `#5B6471` | 라이트 배경 위 보조 텍스트 |
| `--color-ink-300` | `#A8AEB8` | 플레이스홀더, 디바이더 |
| `--color-paper` | `#FFFFFF` | 라이트 섹션 배경 |
| `--color-paper-soft` | `#F7F5EF` | 라이트 섹션 배경 (웜 오프화이트) |
| `--color-cream` | `#F0EADA` | 프리미엄 리포트 느낌의 라이트 섹션 |

### 1-3. Semantic — 상태·신호

| 토큰명 | HEX | 용도 |
|---|---|---|
| `--color-success` | `#3F8F5A` | 모집 진행 중, 정상 상태 |
| `--color-warning` | `#C88A2E` | 곧 마감, 주의 (골드 계열로 통일) |
| `--color-danger` | `#B84A3E` | 마감, 오류 |
| `--color-info` | `#3E6FB8` | 안내 메시지 |

> **네이버 그린(#03C75A 계열) 사용 절대 금지.**
> `success` 색상은 딥 그린으로 확실히 차별화된 값을 사용한다.

### 1-4. 컬러 사용 원칙

- **히어로·1차 전환 섹션**: `--color-navy-950` 배경 + `--color-gold-500` 포인트
- **본문 설명 섹션**: `--color-paper-soft` 배경 + `--color-ink-900` 본문
- **강조 섹션(숫자·가치)**: `--color-navy-900` 배경 + `--color-gold-400` 큰 숫자
- **CTA 버튼 Primary**: 배경 `--color-gold-500`, 텍스트 `--color-navy-950`
- **CTA 버튼 Secondary**: 테두리 `--color-gold-500`, 텍스트 `--color-gold-500`, 배경 투명
- 다크와 라이트 섹션을 **3~5개 블록 단위로 교차**해 리듬 생성

---

## 2. 타이포그래피

### 2-1. Font Family

```css
--font-sans-kr: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, sans-serif;
--font-serif-kr: "Noto Serif KR", "Nanum Myeongjo", serif;
--font-mono: "JetBrains Mono", "D2Coding", ui-monospace, monospace;
```

- **기본 본문 + 헤드라인**: `--font-sans-kr` (Pretendard)
- **강조 인용·히어로 보조**: `--font-serif-kr` (프리미엄 신뢰감이 필요한 인용구·스토리 섹션에 한정)
- **코드·숫자 강조**: `--font-mono` (성과 수치 표현 시 선택적)

### 2-2. Type Scale (데스크톱 기준 / 모바일은 0.85배)

| 토큰명 | Size | Line-height | Weight | 용도 |
|---|---|---|---|---|
| `--text-hero` | 64px | 1.15 | 700 | 히어로 메인 카피 |
| `--text-h1` | 48px | 1.2 | 700 | 페이지 제목 |
| `--text-h2` | 36px | 1.25 | 700 | 섹션 제목 |
| `--text-h3` | 28px | 1.3 | 600 | 서브섹션 제목 |
| `--text-h4` | 22px | 1.35 | 600 | 카드 제목 |
| `--text-lead` | 20px | 1.6 | 400 | 서브 카피, 리드 문장 |
| `--text-body` | 17px | 1.7 | 400 | 본문 |
| `--text-body-sm` | 15px | 1.65 | 400 | 보조 본문 |
| `--text-caption` | 13px | 1.5 | 500 | 캡션, 레이블 |
| `--text-number-xl` | 80px | 1.0 | 700 | 큰 강조 숫자 (6명, 4주, 70만) |
| `--text-number-lg` | 48px | 1.1 | 700 | 중 강조 숫자 |

### 2-3. 모바일 변환

- 모든 `--text-*` 값을 **모바일에서 0.85배로 스케일다운** (히어로는 0.6배)
- 최소 본문 크기: 15px 이하로 내려가지 않음
- 모바일 `--text-hero`: 38px (1.2 line-height)

### 2-4. 자간·단어 간격

- 한글 본문: `letter-spacing: -0.01em`
- 한글 헤드라인: `letter-spacing: -0.02em`
- 숫자 강조(`--text-number-*`): `letter-spacing: -0.04em`

---

## 3. 스페이싱 스케일

8px 기반 스케일.

| 토큰명 | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px |
| `--space-10` | 128px |
| `--space-11` | 160px |

**섹션 패딩 기준**
- 데스크톱 섹션 상하 패딩: `--space-10` (128px)
- 모바일 섹션 상하 패딩: `--space-8` (64px)
- 카드 내부 패딩: `--space-6` (32px)

---

## 4. 레이아웃

```css
--container-max: 1200px;     /* 본문 섹션 */
--container-narrow: 760px;   /* 장문 세일즈 본문, 블로그 */
--container-wide: 1440px;    /* 히어로 풀블리드 */

--gutter-desktop: 32px;
--gutter-mobile: 20px;
```

**브레이크포인트**
```css
--bp-sm: 480px;   /* 소형 모바일 */
--bp-md: 768px;   /* 태블릿 */
--bp-lg: 1024px;  /* 데스크톱 진입 */
--bp-xl: 1280px;  /* 와이드 */
```

**그리드**
- 데스크톱: 12 컬럼 / 모바일: 4 컬럼
- 기본 gap: `--space-5` (24px)

---

## 5. 라운드(Radius)

| 토큰명 | Value | 용도 |
|---|---|---|
| `--radius-xs` | 4px | 배지, 태그 |
| `--radius-sm` | 8px | 인풋, 작은 버튼 |
| `--radius-md` | 12px | 기본 버튼, 카드 |
| `--radius-lg` | 20px | 큰 카드, 모달 |
| `--radius-xl` | 28px | 히어로 내 강조 박스 |
| `--radius-full` | 9999px | 필(pill) 배지 |

**원칙**: 라운드는 중간 톤(8~20px) 중심. 과도한 pill 형태는 CTA·상태 배지에만 한정.

---

## 6. 그림자(Shadow)

```css
--shadow-xs:  0 1px 2px rgba(10, 18, 36, 0.06);
--shadow-sm:  0 4px 12px rgba(10, 18, 36, 0.08);
--shadow-md:  0 12px 32px rgba(10, 18, 36, 0.12);
--shadow-lg:  0 24px 64px rgba(10, 18, 36, 0.18);

/* 골드 글로우 — 히어로 CTA 호버 한정 */
--shadow-gold: 0 8px 24px rgba(200, 155, 60, 0.35);
```

**원칙**
- 라이트 섹션: `--shadow-sm` ~ `--shadow-md`
- 다크 섹션: 그림자 대신 **얇은 골드 보더 1px** (`--color-gold-500` 20% 투명도)로 떠 보이게
- `--shadow-gold`는 히어로 메인 CTA 호버에만 사용

---

## 7. 보더·디바이더

```css
--border-width-thin: 1px;
--border-width-base: 2px;
--border-width-thick: 4px;

--border-color-light: rgba(17, 20, 24, 0.08);    /* 라이트 섹션 */
--border-color-dark: rgba(200, 155, 60, 0.18);   /* 다크 섹션, 은은한 골드 */
--border-color-gold: var(--color-gold-500);      /* 강조 보더 */
```

**골드 하단 라인**: 중요 섹션·카드 상단 또는 하단에 1px 골드 라인을 두어 프리미엄 시그니처로 사용.

---

## 8. 모션

```css
--easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
--easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
--easing-exit: cubic-bezier(0.4, 0, 1, 1);

--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 400ms;
--duration-scroll: 600ms;   /* 스크롤 진입 페이드 */
```

**사용 원칙**
- 버튼 호버: `--duration-fast` + `--easing-standard`
- 모달·드로어: `--duration-base` + `--easing-emphasized`
- 섹션 스크롤 페이드: `--duration-scroll` + `--easing-standard`, translateY 24px
- **과도한 패럴랙스·튀는 애니메이션 금지** (프리미엄 톤 유지)

---

## 9. Z-Index 스케일

```css
--z-base: 0;
--z-raised: 10;
--z-sticky-cta: 40;   /* 모바일 하단 플로팅 CTA */
--z-header: 50;       /* 상단 고정 헤더 */
--z-overlay: 80;      /* 모바일 메뉴 오버레이 */
--z-modal: 90;
--z-toast: 100;
```

---

## 10. 반응형 원칙 (모바일 우선)

- 모든 페이지는 **360px 최소 폭** 기준으로 설계
- 터치 타겟 최소 44×44px
- 히어로 CTA는 모바일에서 **가로 폭 100%** (좌우 `--gutter-mobile` 제외)
- 모바일 하단 플로팅 CTA: `--z-sticky-cta`, 히어로 통과 시점부터 노출

---

## 11. 접근성(A11y) 최소 기준

- 본문 텍스트: 라이트 배경 위 `--color-ink-900`, 다크 배경 위 `#E6EAF2` 이상 밝기
- Primary CTA 대비비: **4.5:1 이상** (`--color-gold-500` on `--color-navy-950` 확보)
- 포커스 링: `2px solid var(--color-gold-400)` + `outline-offset: 3px`
- 모든 이미지 `alt` 필수, 장식성 이미지는 `alt=""`
- 폼 레이블: 시각적으로 항상 노출(플레이스홀더 단독 금지)

---

## 12. 토큰 파일 적용 (참고)

바이브 코딩 시, 루트 CSS에 다음 형태로 주입한다.

```css
:root {
  /* Color — Navy */
  --color-navy-950: #0A1224;
  --color-navy-900: #0F1A33;
  --color-navy-800: #162445;
  --color-navy-700: #1E2F5A;
  --color-navy-600: #2A3F72;
  --color-navy-500: #425C94;
  --color-navy-400: #6B83B8;

  /* Color — Gold */
  --color-gold-600: #A37B2E;
  --color-gold-500: #C89B3C;
  --color-gold-400: #D9B368;
  --color-gold-300: #E8CD97;
  --color-gold-100: #F5EAD1;

  /* Color — Ink / Paper */
  --color-ink-900: #111418;
  --color-ink-700: #2B313B;
  --color-ink-500: #5B6471;
  --color-ink-300: #A8AEB8;
  --color-paper: #FFFFFF;
  --color-paper-soft: #F7F5EF;
  --color-cream: #F0EADA;

  /* Semantic */
  --color-success: #3F8F5A;
  --color-warning: #C88A2E;
  --color-danger:  #B84A3E;
  --color-info:    #3E6FB8;

  /* Type Scale — Desktop */
  --text-hero: 64px;
  --text-h1: 48px;
  --text-h2: 36px;
  --text-h3: 28px;
  --text-h4: 22px;
  --text-lead: 20px;
  --text-body: 17px;
  --text-body-sm: 15px;
  --text-caption: 13px;
  --text-number-xl: 80px;
  --text-number-lg: 48px;

  /* Spacing */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px;
  --space-4: 16px; --space-5: 24px; --space-6: 32px;
  --space-7: 48px; --space-8: 64px; --space-9: 96px;
  --space-10: 128px; --space-11: 160px;

  /* Layout */
  --container-max: 1200px;
  --container-narrow: 760px;
  --container-wide: 1440px;

  /* Radius */
  --radius-xs: 4px;  --radius-sm: 8px;  --radius-md: 12px;
  --radius-lg: 20px; --radius-xl: 28px; --radius-full: 9999px;

  /* Shadow */
  --shadow-xs: 0 1px 2px rgba(10, 18, 36, 0.06);
  --shadow-sm: 0 4px 12px rgba(10, 18, 36, 0.08);
  --shadow-md: 0 12px 32px rgba(10, 18, 36, 0.12);
  --shadow-lg: 0 24px 64px rgba(10, 18, 36, 0.18);
  --shadow-gold: 0 8px 24px rgba(200, 155, 60, 0.35);

  /* Motion */
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;

  /* Z-index */
  --z-base: 0; --z-raised: 10; --z-sticky-cta: 40;
  --z-header: 50; --z-overlay: 80; --z-modal: 90; --z-toast: 100;
}
```

---

## 13. 후속 파일 참조 규칙

- 02~09 모든 MD 파일은 **컬러·폰트·스페이싱 수치를 HEX/px로 직접 쓰지 않고** 반드시 토큰명(`--color-gold-500`)으로 지칭한다.
- 새로운 컬러·사이즈가 필요하면 01-foundation을 먼저 업데이트한 뒤 다른 파일에서 참조한다.
- 브랜드 보이스·카피 톤·컴포넌트 상세(버튼·카드·폼)는 이 파일 범위 밖이며 `02-main-page.md` 이후 각 페이지 파일에서 필요 시점에 정의한다.
