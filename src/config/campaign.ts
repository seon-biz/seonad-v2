/**
 * 세온애드 운영 변수 설정
 * 운영자가 이 파일 하나만 수정하면 전체 사이트에 반영됩니다.
 * 02-main-page.md, 03-curriculum.md의 {{CURRENT_COUNT}}, {{NEXT_START_DATE}} 변수 연동.
 */

/**
 * 현재 기수 설정 — 02-main-page.md §2 · §15, 04/05/06/07/08 FinalCTA 공용.
 *
 * 구조 원칙:
 *  - `currentCohort` 하나에 "몇 기 / 현재·정원 / 모집 여부 / 확정 시작일" 을 모은다.
 *  - `startDate: null` 이면 "정원 달성 시 시작 예정" 으로 라벨링 (날짜 미확정 상태).
 *  - 확정 날짜가 나오면 `startDate: new Date('YYYY-MM-DD')` 만 교체하면 전 사이트
 *    (헤더·히어로·신청 폼·최종 CTA 등) 에 자동 반영된다.
 *  - 문구 조립은 `getStartDateLabel()` / `getRecruitmentLine()` 헬퍼로 단일화해
 *    사용처 10곳의 중복을 없앤다.
 *
 * 모집 상태가 "closed" 가 되면 `currentCohort.isRecruiting = false` 로 바꾸고,
 * 마감 문구는 `closedMessage` 가 그대로 사용된다.
 */
export const campaign = {
  currentCohort: {
    number: 1,
    currentCount: 4,
    maxCount: 6,
    isRecruiting: true,
    /** 확정 날짜가 나오기 전에는 null — "정원 달성 시 시작 예정" 으로 자동 라벨 */
    startDate: null as Date | null,
  },

  /** 모집 마감 상태일 때 사용되는 짧은 대체 문구 */
  closedMessage: '다음 기수 대기 접수 중',

  /**
   * 시작일 라벨 — 확정 전에는 "정원 달성 시 시작 예정",
   * 확정 후에는 "2026년 6월 1일" 형태(ko-KR 로케일).
   */
  getStartDateLabel(): string {
    const d = this.currentCohort.startDate;
    if (!d) return '정원 달성 시 시작 예정';
    return d.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },

  /**
   * 히어로·최종 CTA 하단에 공통으로 노출되는 모집 현황 한 줄.
   * 모집 중: "현재 1기 4/6명 · 정원 달성 시 시작 예정"
   * 마감:    `closedMessage` 그대로.
   */
  getRecruitmentLine(): string {
    const c = this.currentCohort;
    if (!c.isRecruiting) return this.closedMessage;
    return `현재 ${c.number}기 ${c.currentCount}/${c.maxCount}명 · ${this.getStartDateLabel()}`;
  },
};

export const brand = {
  name: '세온애드',
  nameEn: 'SEONAD',
  legalName: '주식회사 티오엠',
  domain: 'seonad.co.kr',
  url: 'https://seonad.co.kr',
  tagline: '스마트스토어 네이버광고 소수정예 수업',
  email: 'cobaltblue872@gmail.com',
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
 *
 * 실제 등록 정보가 채워졌을 때도 "사업장 주소"는 개인 사업장 특성상 의도적으로
 * 비노출한다 (addressHidden: true). Footer/About/Instructor 각 컴포넌트와
 * Organization Schema 는 이 플래그가 켜져 있으면 주소를 숨기거나 생략한다.
 *
 * Schema.org PostalAddress 호환을 위해 addressRegion/Locality/street 필드를
 * 구조로 유지하되, 현재는 비노출 정책에 따라 "운영 준비 중" 값을 유지해
 * OrganizationSchema 에서 자동 생략되도록 한다.
 */
export const business = {
  representative: '서정옥',
  businessNumber: '368-08-082112',
  mailOrderNumber: '2022-충북제천-0004',
  /** 사업장 주소는 비노출 정책 — UI·Schema 에서 숨김 처리 (addressHidden 참고) */
  address: '운영 준비 중',
  addressRegion: '운영 준비 중',
  addressLocality: '운영 준비 중',
  streetAddress: '운영 준비 중',
  /** 08-about.md §6-2 · §11-1 개인정보 보호 책임자 */
  privacyOfficer: '서정옥',
  /** true 면 Footer/About/Instructor 에서 주소 라인을 렌더하지 않음 */
  addressHidden: true,
} as const;

/**
 * 운영자용 통합 법인 정보 뷰 — 외부 (법적 문서 하단·SEO 메타)에 노출할 값을
 * 한 객체에서 참조하고 싶을 때 사용. brand/business 의 의미적으로 겹치는
 * 값을 그대로 재노출하므로 편집은 brand/business 에서 한다.
 */
export const company = {
  legalName: brand.legalName,
  brandName: brand.name,
  ceo: business.representative,
  businessNumber: business.businessNumber,
  mailOrderNumber: business.mailOrderNumber,
  privacyOfficer: business.privacyOfficer,
  email: brand.email,
  phone: brand.phone,
  addressHidden: business.addressHidden,
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
 * 폼 제출 백엔드 — FormSubmit.co (가입 불필요)
 *
 * 선택 사유:
 *  - 별도 계정·대시보드 없이 수신 이메일만으로 즉시 운영 가능
 *  - AJAX 엔드포인트(`/ajax/{email}`)가 JSON 응답을 주므로 기존 fetch 구조
 *    (Formspree 호환) 그대로 사용 가능
 *  - 수신자는 brand.email (cobaltblue872@gmail.com) 공통, 폼 종류는
 *    각 폼의 hidden field `_subject` 로 구분 → 메일함 라벨/필터링 용이
 *
 * 최초 1회 activation(필수 · 운영 전 반드시 완료):
 *  1) 첫 제출 시 FormSubmit → cobaltblue872@gmail.com 으로 "Activate" 메일 발송
 *  2) 수신함에서 링크 1회 클릭 → 이후 모든 제출이 정상적으로 메일로 도착
 *  3) activation 후 FormSubmit 이 제공하는 해시 엔드포인트
 *     (https://formsubmit.co/ajax/{hash}) 로 교체하면 HTML 에서 이메일 노출
 *     차단 가능 — 보안 강화 시 권장 (아래 receiverHash 필드로 교체)
 *
 * 폼 매핑:
 *  - endpoint        : /apply 본 강의 신청 (05-pricing-apply.md §5-6)
 *  - freeEndpoint    : /free 무료 강의 리드 (07-free.md §5-6)
 *  - contactEndpoint : /about 하단 문의 폼 (08-about.md §7-6)
 */
const FORMSUBMIT_AJAX = `https://formsubmit.co/ajax/${encodeURIComponent(brand.email)}`;

export const formspree = {
  /** 세 폼 모두 동일 이메일로 수신 (구분은 _subject 숨김 필드로) */
  endpoint: FORMSUBMIT_AJAX,
  freeEndpoint: FORMSUBMIT_AJAX,
  contactEndpoint: FORMSUBMIT_AJAX,
  /** 폼별 메일 제목 (수신함 필터링용) */
  subjects: {
    apply: '[세온애드] 본 강의 수강 신청',
    free: '[세온애드] 사전 무료 강의 신청',
    contact: '[세온애드] 일반 문의',
  },
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
