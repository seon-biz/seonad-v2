/*
 * Legal 문서 공용 타입.
 *
 * 블록(Block) 시스템으로 본문을 구조화. 한국 법적 문서 특유의
 *   - 원형 번호(①②③) 는 p 텍스트 내에 그대로 포함
 *   - 하위 번호(1. 2. 3.) 는 ol 블록
 *   - 하위 한국어 기호(가. 나. 다.) 는 ol-latin 블록
 *   - 카테고리 제목(가. 수집 항목) 은 subheading 블록
 *   - 표는 table 블록
 * 로 나눠 렌더러(LegalBlock)에서 시각 일관성을 보장한다.
 *
 * 이용약관처럼 장(章)-조(條) 2단 구조면 section.articles 사용.
 * 개인정보처리방침·환불 정책처럼 단일 단계면 section.blocks 사용.
 */
export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'ol'; items: string[] }
  | { type: 'ol-latin'; items: string[] }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string };

export type LegalArticle = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalSection = {
  id: string;
  title: string;
  /** 장 구조(terms) — articles 가 있으면 2단 목차·본문 */
  articles?: LegalArticle[];
  /** 평면 구조(privacy, refund) — blocks 직접 보유 */
  blocks?: LegalBlock[];
};

export type LegalDocument = {
  slug: 'terms' | 'privacy' | 'refund';
  title: string;
  summary: string;
  sections: LegalSection[];
  /** 부칙 — 시행일 관련 단일 문장 */
  appendixText?: string;
};
