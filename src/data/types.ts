// ============================================================
//  DAVETİYE VERİ TİPİ  (teknik dosya — buraya dokunmana gerek yok)
// ------------------------------------------------------------
//  Bu dosya, her davetiyenin hangi alanlardan oluştuğunu tanımlar.
//  İçeriği değiştirmek için:  src/data/<müşteri-adı>.ts  dosyalarını düzenle.
// ============================================================

export type ProgramAdimi = {
  saat: string;        // örn: "19.00"
  baslik: string;      // örn: "Karşılama Kokteyli"
  aciklama?: string;   // örn: "Bahçede ikramlarla"
};

export type Foto = {
  src: string;         // fotoğraf adresi (VİDEO ise: kapak / poster görseli)
  alt: string;         // erişilebilirlik için açıklama (zorunlu)
  video?: string;      // doluysa bu bir VİDEODUR; src poster olur, tıklanınca oynatılır
};

export type Davetiye = {
  // — LİNK / KİMLİK —
  slug: string;              // URL'de görünecek isim: /davet/emre-funda
  etkinlikTuru: string;      // "Düğün", "Nişan", "Doğum Günü", "Açılış" ...
  vitrindeGoster: boolean;   // ana sayfadaki şablon galerisinde görünsün mü?

  // — TEMEL BİLGİLER —
  isimler: string;           // "Emre & Funda"  (Hero'da büyük yazı)
  monogram: string;          // açılış ekranındaki baş harfler: "E & F"
  altBaslik: string;         // isimlerin altındaki kısa satır

  // — TARİH / SAAT —
  // Geri sayım ve takvim bunu kullanır. Biçim:  "YYYY-MM-DDTHH:MM"
  tarihISO: string;          // örn: "2026-09-19T19:00"
  tarihMetni: string;        // ekranda görünecek okunur hâli
  bitisISO?: string;         // takvim için bitiş (opsiyonel)

  // — DAVET METNİ —
  davetMetni: string;        // 2-3 cümlelik samimi metin

  // — PROGRAM AKIŞI —
  program: ProgramAdimi[];

  // — FOTOĞRAFLAR —
  heroFoto: Foto;            // en üstteki tam ekran fotoğraf
  galeri: Foto[];            // ilk kare geniş, sonrakiler kare ızgara

  // — MEKÂN —
  mekanAdi: string;
  mekanAdres: string;
  haritaLinki: string;       // Google Maps yol tarifi linki

  // — KATILIM / İLETİŞİM —
  // Başında + OLMADAN, ülke koduyla:  905XXXXXXXXX
  whatsappNumara: string;

  // — MÜZİK (opsiyonel) —
  // Açılış butonuna basınca çalacak fon müziği. İstemezsen boş bırak: ""
  muzikSrc?: string;

  // — WHATSAPP ÖNİZLEME (Open Graph) —
  ogBaslik: string;          // paylaşınca çıkan kart başlığı
  ogAciklama: string;        // kart açıklaması
  ogGorsel: string;          // 1200x630 px kart görseli (TAM https adres)

  // — TEMA RENGİ —
  // Tarayıcı üst çubuğu ve WhatsApp kart vurgusu bu rengi kullanır.
  temaRengi: string;         // hex, örn: "#1E2B25"
};
