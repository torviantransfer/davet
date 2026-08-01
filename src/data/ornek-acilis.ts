import type { Davetiye } from './types';

// 🏢  DEMO — AÇILIŞ / KURUMSAL  (vitrinde kurumsal örnek olsun diye)

export const acilis: Davetiye = {
  slug: 'atolye-acilis',
  etkinlikTuru: 'Açılış',
  vitrindeGoster: true,

  isimler: 'Atölye 24',
  monogram: '24',
  altBaslik: 'Açılışa davetlisiniz',

  tarihISO: '2026-11-05T18:00',
  tarihMetni: '5 Kasım 2026 · Perşembe · 18.00',
  bitisISO: '2026-11-05T21:00',

  davetMetni:
    'Uzun bir hazırlığın ardından kapılarımızı açıyoruz. ' +
    'Bu heyecanlı günde sizi de aramızda görmekten mutluluk ' +
    'duyarız. Kokteyl eşliğinde tanışmak dileğiyle.',

  program: [
    { saat: '18.00', baslik: 'Kapı Açılışı', aciklama: 'Karşılama ve kokteyl' },
    { saat: '18.30', baslik: 'Kurdele Kesimi', aciklama: 'Resmi açılış töreni' },
    { saat: '19.00', baslik: 'Tanıtım', aciklama: 'Mekân ve konsept sunumu' },
    { saat: '19.30', baslik: 'Networking', aciklama: 'Sohbet ve ikramlar' },
  ],

  heroFoto: {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1400&q=80',
    alt: 'Açılış etkinliği ve kalabalık',
  },
  galeri: [
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80', alt: 'Etkinlik alanı' },
    { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80', alt: 'Kokteyl kadehleri' },
    { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80', alt: 'Modern iç mekân' },
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', alt: 'Ofis ortamı' },
  ],

  mekanAdi: 'Atölye 24',
  mekanAdres: 'Lara Cad. No: 24, Muratpaşa / Antalya',
  haritaLinki: 'https://www.google.com/maps/search/?api=1&query=Lara+Muratpasa+Antalya',

  whatsappNumara: '905XXXXXXXXX',
  muzikSrc: '',

  ogBaslik: 'Atölye 24 Açılıyor',
  ogAciklama: '5 Kasım 2026 · Antalya — Açılış kokteylimize davetlisiniz.',
  ogGorsel: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=630&fit=crop&q=80',

  temaRengi: '#1F3A4D',
};
