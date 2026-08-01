import type { Davetiye } from './types';

// ╔══════════════════════════════════════════════════════════════════╗
// ║                                                                    ║
// ║   💍  DÜĞÜN DAVETİYESİ — EMRE & FUNDA                              ║
// ║                                                                    ║
// ║   Kod bilmene GEREK YOK. Aşağıda tırnak (" ") içindeki             ║
// ║   yazıları değiştir, kaydet, bitti.                                ║
// ║   • Tırnakların içini değiştir, tırnakları SİLME.                  ║
// ║   • Satır sonundaki virgülleri (,) SİLME.                          ║
// ║   • Türkçe karakter (ç ş ğ ü ö ı) sorunsuz çalışır.               ║
// ║                                                                    ║
// ╚══════════════════════════════════════════════════════════════════╝

export const emreFunda: Davetiye = {
  // ——— LİNK / KİMLİK ———
  slug: 'emre-funda',            // davetiyenin adresi:  /davet/emre-funda
  etkinlikTuru: 'Düğün',
  vitrindeGoster: true,          // ana sayfa vitrininde görünsün mü?

  // ——— TEMEL BİLGİLER ———
  isimler: 'Emre & Funda',
  monogram: 'E & F',             // açılış ekranındaki baş harfler
  altBaslik: 'Evleniyoruz',

  // ——— TARİH / SAAT ———  (biçim: YIL-AY-GÜNTsaat:dakika)
  tarihISO: '2026-09-19T19:00',
  tarihMetni: '19 Eylül 2026 · Cumartesi · 19.00',
  bitisISO: '2026-09-19T23:59',  // takvime eklerken bitiş saati

  // ——— DAVET METNİ ———
  davetMetni:
    'Hayatımızın en özel gününde, sevincimizi paylaşmak için ' +
    'sizleri de yanımızda görmek isteriz. Bu mutluluğu birlikte ' +
    'kutlamak dileğiyle...',

  // ——— PROGRAM AKIŞI ———  (istediğin kadar satır ekleyip çıkarabilirsin)
  program: [
    { saat: '18.30', baslik: 'Karşılama', aciklama: 'Bahçede kokteyl ve ikramlar' },
    { saat: '19.00', baslik: 'Nikah Töreni', aciklama: 'Resmi nikâh merasimi' },
    { saat: '19.45', baslik: 'İlk Dans', aciklama: 'Çiftimizin açılış dansı' },
    { saat: '20.15', baslik: 'Akşam Yemeği', aciklama: 'Set menü servisi' },
    { saat: '21.30', baslik: 'Müzik & Eğlence', aciklama: 'Canlı müzik ve dans' },
  ],

  // ——— FOTOĞRAFLAR ———
  // Kendi fotoğraflarınla değiştirirken, "alt" açıklamasını da güncelle.
  heroFoto: {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=80',
    alt: 'El ele tutuşan gelin ve damat',
  },
  // İlk kare geniş gösterilir. Bir karenin "video" alanı doluysa o kare VİDEO olur:
  //   src   = videonun kapak (poster) görseli,
  //   video = tıklanınca oynatılacak video dosyası.
  // ▼ Demo videolar ücretsiz stoktur; kendi DİŞ ÇEKİM / drone videolarınla değiştir.
  galeri: [
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      alt: 'Düğün dış çekim videosu',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-white-flowers-blooming-time-lapse-1170-large.mp4',
    },
    { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80&auto=format&fit=crop', alt: 'Gelin buketi yakın çekim' },
    { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', alt: 'Düğün masası süslemesi' },
    {
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
      alt: 'Kır düğünü dış çekim videosu',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    },
    { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', alt: 'Nikah alanı süslemeleri' },
    { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80', alt: 'Gün batımında çift silueti' },
  ],

  // ——— MEKÂN ———
  mekanAdi: 'Sultan Garden Kır Düğün Salonu',
  mekanAdres: 'Kepez Mah. Zeytinlik Cad. No: 24, Kepez / Antalya',
  // Google Maps'te mekânı bul → Paylaş → linki buraya yapıştır.
  haritaLinki: 'https://www.google.com/maps/search/?api=1&query=Sultan+Garden+Kepez+Antalya',

  // ——— KATILIM / WHATSAPP ———
  // Katılım formu bu numaraya WhatsApp mesajı açar.
  // Başında + OLMADAN, ülke koduyla yaz:  905XXXXXXXXX
  whatsappNumara: '905XXXXXXXXX',

  // ——— MÜZİK (opsiyonel) ———
  // Açılışta çalacak fon müziği adresi. İstemiyorsan boş bırak: ''
  muzikSrc: '',

  // ——— WHATSAPP ÖNİZLEME (Open Graph) ———
  ogBaslik: 'Emre & Funda Evleniyor',
  ogAciklama: '19 Eylül 2026 · Antalya — Düğün davetimize bekliyoruz.',
  // 1200x630 px paylaşım kartı. TAM https adres olmalı. (Hazırlama rehberi README'de.)
  ogGorsel: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop&q=80',

  // ——— TEMA RENGİ ———
  temaRengi: '#1E2B25',
};
