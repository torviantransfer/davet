// @ts-check
import { defineConfig } from 'astro/config';

// ⚠️ ÖNEMLİ: Vercel'e deploy ettikten sonra buradaki adresi
// kendi alan adınla değiştir. Open Graph (WhatsApp önizleme) kartındaki
// og:image ve og:url TAM (https://...) adres gerektirir; bu yüzden "site" şart.
export default defineConfig({
  site: 'https://davetiye-xi-rouge.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
