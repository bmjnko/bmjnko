// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 커스텀 도메인을 연결하면 이 값을 바꿔주세요. sitemap과 canonical URL에 쓰입니다.
  site: 'https://bmjnko.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      // 라이트 테마. 배경색은 prose.css에서 --surface로 덮어쓴다.
      theme: 'vitesse-light',
    },
  },
});
