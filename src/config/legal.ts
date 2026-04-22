/*
 * 법적 고지 3종(이용약관·개인정보처리방침·환불 정책) 공통 변수.
 *
 * 모든 상호·연락처는 campaign.ts 의 brand/business 를 재참조하여 단일 진실원
 * (single source of truth) 을 보장한다. 법인 정보(대표자·사업자번호 등) 가
 * 실제 등록 정보로 교체되면 campaign.ts 한 곳만 갱신하면 된다.
 *
 * effectiveDate / lastUpdated 는 법률 검토 후 실제 런칭일로 교체. 09-legal.md
 * §6 "변수 치환 체크리스트" 참조.
 */
import { brand, business, routes } from './campaign';

export const legalConfig = {
  company: brand.legalName,
  brand: brand.name,
  domain: brand.domain,
  url: brand.url,
  email: brand.email,
  phone: brand.phone,
  representative: business.representative,
  businessNumber: business.businessNumber,
  mailOrderNumber: business.mailOrderNumber,
  address: business.address,
  privacyOfficer: business.privacyOfficer,
  privacyOfficerEmail: brand.email,
  /** 시행일 — TODO(법률 검토 완료 후 실제 런칭일로 교체) */
  effectiveDate: '2026-XX-XX',
  /** 최종 개정일 — TODO(검토 완료일로 교체) */
  lastUpdated: '2026-XX-XX',
} as const;

/**
 * Legal 페이지 3종의 메타 — 세트로 순회(섹션 5 "다른 legal 문서" 링크)하기 쉽게
 * 배열로 노출. 순서: 이용약관 → 개인정보처리방침 → 환불 정책.
 */
export const legalDocs = [
  {
    slug: 'terms',
    label: '이용약관',
    href: routes.terms,
    summary: '세온애드 수강에 관한 양측의 권리와 의무를 정합니다.',
  },
  {
    slug: 'privacy',
    label: '개인정보처리방침',
    href: routes.privacy,
    summary:
      '주식회사 티오엠이 수강생 개인정보를 어떻게 수집·이용·보관하는지 정리했습니다.',
  },
  {
    slug: 'refund',
    label: '환불 정책',
    href: routes.refund,
    summary: '언제, 얼마나 환불되는지 투명하게 정리했습니다.',
  },
] as const;

export type LegalSlug = (typeof legalDocs)[number]['slug'];
