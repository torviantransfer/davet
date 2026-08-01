import type { Davetiye } from './types';

// 🎂  DEMO — DOĞUM GÜNÜ  (vitrinde "başka etkinlik türü" örneği olsun diye)
//     Aynı şablon, farklı veri. Yeni müşteri = yeni bir dosya, o kadar.

export const dogumGunu: Davetiye = {
  slug: 'defne-6-yas',
  etkinlikTuru: 'Doğum Günü',
  vitrindeGoster: true,

  isimler: "Defne'nin 6. Yaşı",
  monogram: '6',
  altBaslik: 'Doğum günü partisi',

  tarihISO: '2026-10-11T14:00',
  tarihMetni: '11 Ekim 2026 · Pazar · 14.00',
  bitisISO: '2026-10-11T17:00',

  davetMetni:
    'Minik prensesimiz Defne 6 yaşına giriyor! Bu neşeli günü ' +
    'birlikte kutlamak, pasta kesip eğlenmek için tüm dostlarımızı ' +
    'bekliyoruz.',

  program: [
    { saat: '14.00', baslik: 'Karşılama', aciklama: 'Balon ve oyun alanı' },
    { saat: '14.45', baslik: 'Animasyon', aciklama: 'Palyaço ve yüz boyama' },
    { saat: '15.30', baslik: 'Pasta', aciklama: 'Mum üfleme ve dilek' },
    { saat: '16.15', baslik: 'İkramlar', aciklama: 'Atıştırmalıklar ve müzik' },
  ],

  heroFoto: {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=80',
    alt: 'Renkli balonlar ve doğum günü süslemeleri',
  },
  galeri: [
    { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80', alt: 'Doğum günü pastası' },
    { src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80', alt: 'Renkli balonlar' },
    { src: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=800&q=80', alt: 'Parti masası' },
    { src: 'https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?w=800&q=80', alt: 'Şeker ve tatlılar' },
  ],

  mekanAdi: 'Mavi Bahçe Kafe',
  mekanAdres: 'Barış Mah. Papatya Sok. No: 5, Muratpaşa / Antalya',
  haritaLinki: 'https://www.google.com/maps/search/?api=1&query=Muratpasa+Antalya',

  whatsappNumara: '905XXXXXXXXX',
  muzikSrc: '',

  ogBaslik: 'Defne 6 Yaşında! 🎂',
  ogAciklama: '11 Ekim 2026 · Antalya — Doğum günü partimize bekleriz.',
  ogGorsel: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&h=630&fit=crop&q=80',

  temaRengi: '#C0455E',
};
