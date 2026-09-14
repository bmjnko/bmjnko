---
title: 홈페이지를 열며
date: 2026-09-14
description: 이 홈페이지를 만든 이유와 Memo 탭에 무엇을 쓸지에 대한 첫 기록.
---

이곳은 첫 번째 메모입니다.
이 파일은 예시라서 내용을 바꾸거나 지워도 됩니다.

## 글 쓰는 방법

`src/content/memo/` 폴더에 마크다운 파일을 하나 추가하면 자동으로 목록에 나타납니다.
파일 맨 위에 아래처럼 frontmatter를 적어 주세요.

```md
---
title: 글 제목
date: 2026-09-14
description: 검색 결과와 링크 미리보기에 보이는 한 줄 요약 (선택)
draft: true
---
```

`draft: true`로 두면 로컬에서는 보이지만 배포된 사이트에는 나타나지 않습니다.

## 마크다운 문법 확인

본문에서 **굵은 글씨**, *기울임*, `인라인 코드`, [링크](https://astro.build)를 쓸 수 있습니다.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. The quick brown fox jumps over the lazy dog.

> 인용은 이렇게 표시됩니다.
> 왼쪽에 얇은 선이 하나 그어집니다.

- 목록 첫 항목
- 목록 두 번째 항목
- 목록 세 번째 항목

1. 순서가 있는 목록
2. 두 번째
3. 세 번째

---

마지막 문단입니다.
