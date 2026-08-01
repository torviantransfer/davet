// ============================================================
//  WHATSAPP KART GÖRSELİ (Open Graph) — otomatik üretilir.
// ------------------------------------------------------------
//  Her davetiye için /og/<slug>.png adresinde 1200x630 px bir
//  kart görseli üretir. Üstünde isimler + "... Davetiyesi" yazar.
//  WhatsApp linki paylaşınca bu görsel kart olarak çıkar.
//  (Kendi sunucunda üretilir; Unsplash gibi dış bağlantıya gerek yok.)
// ============================================================
import { OGImageRoute } from 'astro-og-canvas';
import { davetiyeler } from '../../data';

// slug -> davetiye eşlemesi
const sayfalar = Object.fromEntries(davetiyeler.map((d) => [d.slug, d]));

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'slug',
  pages: sayfalar,
  getImageOptions: (_slug, dav) => ({
    title: dav.isimler,
    description: `${dav.etkinlikTuru} Davetiyesi  ·  ${dav.tarihMetni.split(' · ')[0]}`,
    // Türkçe karakterler (ğ ş ı İ ç ö ü) için Türkçe'yi tek dosyada
    // içeren tam font kullanıyoruz (Poppins — Latin Extended dahil).
    fonts: [
      'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Regular.ttf',
      'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf',
    ],
    bgGradient: [
      [15, 30, 24],
      [28, 58, 48],
    ],
    border: { color: [206, 142, 92], width: 24, side: 'inline-start' },
    padding: 90,
    font: {
      title: {
        color: [245, 239, 228],
        size: 88,
        weight: 'Bold',
        lineHeight: 1.15,
      },
      description: {
        color: [167, 190, 176],
        size: 42,
        weight: 'Normal',
      },
    },
    format: 'PNG',
  }),
});
