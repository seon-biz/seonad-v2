# 세온애드 (SEONAD) 웹사이트

**법인**: 주식회사 티오엠 · **도메인**: seonad.co.kr

스마트스토어 셀러 대상 네이버광고 소수정예 수업(한 기수 6명, 4주 과정, 70만 원)의 판매페이지 + 사전 무료 강의 리드 확보 웹사이트.

## 스택

- **프레임워크**: Astro 5 (정적 사이트 생성, Islands)
- **스타일링**: Tailwind CSS 3 (`@astrojs/tailwind`) + 디자인 토큰 CSS 변수
- **폰트**: Pretendard Variable + Noto Serif KR (CDN)
- **언어**: TypeScript (strict)
- **폼**: Formspree (PG 연동 없음, 결제는 법인계좌 이체 단독)
- **배포 가정**: Cloudflare Pages 또는 Netlify (정적)

## 시작하기

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/로 정적 빌드
npm run preview    # 빌드 결과 미리보기
npm run check      # 타입 체크 (astro check)
```

## 페이지 구성

| 경로 | 내용 |
|---|---|
| `/` | 메인 판매페이지 (14개 섹션) |
| `/curriculum` | 커리큘럼 상세 (VOD 7강 + 부록, 줌 2회) |
| `/instructor` | 강사 소개 (실명·얼굴 비공개) |
| `/apply` | 수강 신청 (3필수 + 4선택, Formspree) |
| `/faq` | FAQ 42개 (카테고리 탭 + 검색) |
| `/free` | 사전 무료 강의 신청 (줌 라이브 60분) |
| `/about` | 세온애드 이야기 + 문의 폼 |
| `/blog` | (플레이스홀더, noindex) |
| `/legal/terms` · `/legal/privacy` · `/legal/refund` | 이용약관·개인정보·환불 정책 |
| `/contact` → `/about#contact-form` | 301 리다이렉트 |

## 디렉토리 구조

```
.
├── public/
│   ├── images/            # 실사·목업 이미지 (1기는 골드 라인아트 와이어프레임)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/        # 섹션·UI·SEO 스키마·legal 블록 렌더
│   ├── config/
│   │   ├── campaign.ts    # 운영 변수 (모집 현황·법인 정보·Formspree 등)
│   │   └── legal.ts       # 법적 문서 공용 변수 (시행일·개정일)
│   ├── data/
│   │   ├── faq.ts         # FAQ 42개
│   │   └── legal/         # terms/privacy/refund 본문 데이터
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── LegalLayout.astro  # /legal/* 공통 셸 (스티키 TOC·인쇄 친화)
│   ├── pages/             # 라우트
│   └── styles/
│       └── global.css     # Tailwind + 디자인 토큰 CSS 변수
├── astro.config.mjs       # sitemap 필터·301 redirects
├── tailwind.config.mjs    # 01-foundation.md 토큰을 theme.extend 주입
└── tsconfig.json          # @components, @layouts, @config, @data, @styles 별칭
```

## 설계 문서 (루트 MD)

| 파일 | 내용 |
|---|---|
| `00-vibe-coding-prompt.md` | 전체 작업 프롬프트 |
| `01-foundation.md` | 디자인 토큰 (컬러·타이포·스페이싱·모션) |
| `02-main-page.md` | `/` 14개 섹션 구조·카피 |
| `03-curriculum.md` | `/curriculum` 페이지 구조 |
| `세온애드-K1-personas-values.md` | 페르소나 + 가치 제안 |
| `세온애드-K2-sitemap-conversion.md` | 사이트맵·전환 설계 |
| `세온애드-K3-product-curriculum.md` | 상품·가격·결제 |
| `세온애드-K4-seo-geo-marketing.md` | SEO/GEO/마케팅 전략 |

> `04`~`09` 명세(강사·신청·FAQ·무료 강의·About·Legal)는 대화로 전달되어 코드에 직접 반영됨.

## 운영 규칙

- 디자인 수치(HEX/px)는 코드에 직접 쓰지 말고 **Tailwind 토큰명**으로만 참조.
- **PG사 연동 없음**. 결제는 법인계좌 이체 단독, 일시불 70만 원.
- `{{CURRENT_COUNT}}`, `{{NEXT_START_DATE}}` 등 운영 변수는 `src/config/campaign.ts`.
- 법적 문서 본문 교체는 `src/data/legal/*.ts`, 공용 시행일은 `src/config/legal.ts`.
- 네이버 그린(#03C75A) 계열 **절대 금지** (브랜드 오인 방지).
- 강사 실명·얼굴 비공개 원칙 준수.
