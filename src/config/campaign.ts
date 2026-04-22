/**
 * 세온애드 운영 변수 설정
 * 운영자가 이 파일 하나만 수정하면 전체 사이트에 반영됩니다.
 * 02-main-page.md, 03-curriculum.md의 {{CURRENT_COUNT}}, {{NEXT_START_DATE}} 변수 연동.
 */

export type CampaignStatus = 'recruiting' | 'closed' | 'waitlist';

export const campaign = {
  currentCount: '4/6',
  currentCountNumber: 4,
  capacity: 6,
  nextStartDate: '2026년 6월 1일',
  status: 'recruiting' as CampaignStatus,
  closedMessage: '다음 기수 대기 접수 중',
} as const;

export const brand = {
  name: '세온애드',
  nameEn: 'SEONAD',
  legalName: '주식회사 티오엠',
  domain: 'seonad.co.kr',
  url: 'https://seonad.co.kr',
  tagline: '스마트스토어 네이버광고 소수정예 수업',
  email: 'cobaltblue8877@naver.com',
  phone: '010-7327-8877',
  phoneIntl: '+82-10-7327-8877',
  businessHours: '평일 10:00~18:00 (주말·공휴일 휴무)',
  /**
   * 카카오톡 채널 — 06-faq.md §11-2 / 08-about.md §7-3
   * TODO(운영): 1기 런칭 전 실제 채널 ID 주입. 채널 URL 은 자동 연결.
   */
  kakaoChannelId: '운영 준비 중',
  kakaoChannelUrl: 'http://pf.kakao.com/_',
  /** Organization Schema foundingDate — 08-about.md §0-2 */
  foundingYear: '2025',
  /** 세온애드가 본격 수업 운영을 시작한 연도 (브랜드 스토리용) */
  launchYear: '2026',
} as const;

/**
 * 법인 상세 정보 — 04-instructor.md §7-4 · Footer · 08-about.md §6 공용.
 * 1기 런칭 전까지는 "운영 준비 중"으로 표기하며, 운영자가 실제 사업자
 * 정보를 확보하는 즉시 이 객체만 갱신하면 사이트 전역에 반영된다.
 *
 * Schema.org PostalAddress 구조에 맞춰 addressRegion/Locality/street 도 분리해둠.
 * 정식 등록 전에는 모두 "운영 준비 중" 플레이스홀더. Organization Schema 에는
 * 값이 "운영 준비 중" 이면 해당 필드를 생략한다.
 */
export const business = {
  representative: '운영 준비 중',
  businessNumber: '운영 준비 중',
  mailOrderNumber: '운영 준비 중',
  address: '운영 준비 중',
  addressRegion: '운영 준비 중',
  addressLocality: '운영 준비 중',
  streetAddress: '운영 준비 중',
  /** 08-about.md §6-2 · §11-1 개인정보 보호 책임자 */
  privacyOfficer: '운영 준비 중',
} as const;

/**
 * 세온 브랜드 생태계 — 04-instructor.md §6.
 * 세온애드 카드(current=true)는 골드 테두리 2px + 현재 페이지 배지로 강조.
 */
export const brandEcosystem = [
  {
    key: 'seonbiz',
    name: '세온비즈',
    nameEn: 'SEONBIZ',
    tagline: '온라인 마케팅 1:1 코칭 · 2019년~',
    description:
      '쇼핑몰·스마트스토어 대표 전용 장기 코칭 서비스. 세온애드의 모태가 된 브랜드.',
    href: 'https://seonbiz.co',
    linkLabel: 'seonbiz.co →',
    external: true,
    current: false,
  },
  {
    key: 'seonad',
    name: '세온애드',
    nameEn: 'SEONAD',
    tagline: '스마트스토어 네이버광고 4주 수업 · 2026년~',
    description:
      '한 기수 6명, VOD 2주 + 줌 2주. 세온비즈 7년 경험에서 네이버광고만 꺼내 만든 수업.',
    href: '/',
    linkLabel: '메인으로 →',
    external: false,
    current: true,
  },
  {
    key: 'seoncoder',
    name: '세온코더',
    nameEn: 'SEONCODER',
    tagline: '대표 직접 코딩 솔루션 · 2023년~',
    description:
      '개발자 없이 스마트스토어 대표가 직접 쓰는 도구. 세온애드와 별개 운영되는 자매 브랜드.',
    href: 'https://seoncoder.co',
    linkLabel: 'seoncoder.co →',
    external: true,
    current: false,
  },
] as const;

export const product = {
  price: 700000,
  priceLabel: '70만 원',
  duration: '4주',
  capacity: '6명',
  format: 'VOD 7강 + 부록 (240분) · 줌 라이브 2회 (각 120분) · 3개월 애프터케어',
  paymentMethod: '법인계좌 이체 (주식회사 티오엠 명의) · 일시불',
} as const;

/**
 * Formspree 엔드포인트 — 05/07 명세 공용
 *
 *  - endpoint: /apply 본 강의 신청 폼 (05-pricing-apply.md §5-6)
 *  - freeEndpoint: /free 무료 강의 리드 폼 (07-free.md §5-6 / §11-1)
 *    · 두 폼은 수신 주소는 같지만 Formspree 대시보드에서는 별도 폼 ID 로
 *      관리해야 리드 구분·자동 응답 템플릿 분리가 가능하다.
 *  TODO(운영): 1기 런칭 전 실제 form ID 주입.
 */
export const formspree = {
  endpoint: 'https://formspree.io/f/REPLACE_WITH_FORM_ID',
  freeEndpoint: 'https://formspree.io/f/REPLACE_WITH_FREE_CLASS_FORM_ID',
  /** 08-about.md §7-6 — 문의 폼 전용 Formspree 폼 */
  contactEndpoint: 'https://formspree.io/f/REPLACE_WITH_CONTACT_FORM_ID',
} as const;

/**
 * 사전 무료 강의 — 07-free.md §2-4, §11-2
 *
 *  - displayDatetime: 사용자에게 보여줄 한국어 표기 (섹션 1·5·6·8 공통)
 *  - isoDatetime: Event Schema startDate 용 ISO 8601 (KST +09:00)
 *  - status:
 *      'scheduled' → 정상 노출
 *      'tba'       → 일정 조율 중, 히어로에 "다음 일정 조율 중" 대체 문구
 *      'cancelled' → 회차 취소 (Event Schema eventStatus 도 EventCancelled)
 *
 *  운영자가 일정을 업데이트할 때 이 3개 값만 손본다. 지나간 일정은
 *  클라이언트 스크립트가 Date.now() 와 비교해 "다음 일정 조율 중" 으로 자동 교체.
 */
export type FreeClassStatus = 'scheduled' | 'tba' | 'cancelled';

export const freeClass = {
  displayDatetime: '2026년 5월 7일 (화) 저녁 8시',
  isoDatetime: '2026-05-07T20:00:00+09:00',
  durationLabel: '60분',
  durationMinutes: 60,
  cadence: '월 1~2회',
  zoomUrlPlaceholder: 'https://zoom.us/j/REPLACE_WITH_ZOOM_ID',
  status: 'scheduled' as FreeClassStatus,
  tbaMessage: '다음 일정 조율 중 — 확정되는 대로 신청자에게 우선 안내드립니다.',
} as const;

/**
 * 신청 폼 스마트스토어 카테고리 드롭다운 — 05-pricing-apply.md §5-3 필드 3
 * "기타" 선택 시 직접 입력 텍스트 필드가 노출된다 (§10-1·3).
 */
export const smartstoreCategories = [
  '패션의류',
  '패션잡화',
  '화장품·미용',
  '디지털·가전',
  '가구·인테리어',
  '출산·육아',
  '식품',
  '스포츠·레저',
  '생활·건강',
  '여가·생활편의',
  '도서',
  '반려동물',
  '기타 (아래 텍스트 박스에 직접 입력)',
] as const;

export const routes = {
  home: '/',
  curriculum: '/curriculum',
  instructor: '/instructor',
  apply: '/apply',
  faq: '/faq',
  free: '/free',
  about: '/about',
  /**
   * 문의 — 08-about.md §7 에서 About 페이지에 문의 폼을 통합하며,
   * 별도 /contact 페이지는 /about#contact-form 으로 301 리다이렉트(astro.config.mjs).
   * 내비 링크는 모두 이 앵커를 직접 가리킨다.
   */
  contact: '/about#contact-form',
  blog: '/blog',
  terms: '/legal/terms',
  privacy: '/legal/privacy',
  refund: '/legal/refund',
} as const;
