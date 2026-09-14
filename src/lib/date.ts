/** 2026-09-14 형태의 Date를 2026.09.14 로 표기한다. */
export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

/** <time datetime> 속성용 ISO 날짜 (YYYY-MM-DD). */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
