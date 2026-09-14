# bmjnko

Beomjoon Ko의 개인 홈페이지.
About과 Memo 두 탭으로 구성된 Astro 정적 사이트입니다.

## 개발

```bash
pnpm install
pnpm dev
```

## 글 쓰기

`src/content/memo/` 안에 마크다운 파일을 추가하면 Memo 목록에 자동으로 나타납니다.
frontmatter는 `title`, `date`가 필수이고 `description`, `draft`는 선택입니다.
`draft: true`인 글은 로컬에서만 보이고 배포에는 포함되지 않습니다.

## About 페이지 수정

사진은 `src/assets/profile.jpg`를 교체하고 `src/pages/index.astro` 상단의 `profileAlt`, `intro`, `links` 상수를 수정하면 됩니다.
소개글은 `intro.ko`와 `intro.en` 두 벌을 유지합니다.

## KR / EN 토글

헤더 오른쪽의 KR | EN 버튼으로 언어를 바꿀 수 있고, 선택은 브라우저(localStorage)에 저장되어 다음 방문에도 유지됩니다.
URL은 바뀌지 않으며, About 소개글과 짧은 UI 문구(`src/lib/i18n.ts`)만 전환됩니다.
Memo 글 본문은 작성된 언어 그대로 표시됩니다.
새 문구를 두 언어로 넣을 때는 `Bi` 컴포넌트(`src/components/Bi.astro`)를 사용하세요.
빌드 시 Astro가 사진을 자동으로 리사이즈하고 최적화합니다.

## 배포

Vercel에 연결되어 있어 `main` 브랜치에 push하면 자동으로 배포됩니다.
커스텀 도메인을 연결하면 `astro.config.mjs`의 `site` 값을 바꿔 주세요.
