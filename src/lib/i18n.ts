export const LANGS = ['ko', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'ko';
export const LANG_STORAGE_KEY = 'lang';

/** 두 언어로 쓰인 짧은 UI 문구. About 소개글처럼 긴 내용은 각 페이지에서 직접 다룬다. */
export const t = {
  navLabel: { ko: '주 메뉴', en: 'Main menu' },
  langToggleLabel: { ko: '언어 선택', en: 'Language' },
  memoSubtitle: { ko: '짧은 생각과 기록을 남깁니다.', en: 'Short thoughts and notes.' },
  memoEmpty: { ko: '아직 쓴 글이 없습니다.', en: 'Nothing written yet.' },
  backToMemo: { ko: 'Memo로 돌아가기', en: 'Back to Memo' },
} satisfies Record<string, Record<Lang, string>>;
