import { getCollection, type CollectionEntry } from 'astro:content';

export type Memo = CollectionEntry<'memo'>;

/** draft를 제외하고 최신 글 우선으로 정렬한 Memo 목록. dev에서는 draft도 보인다. */
export async function getMemos(): Promise<Memo[]> {
  const all = await getCollection('memo', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
