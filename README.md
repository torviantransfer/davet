# Dijital Davetiye Stüdyosu

Telefonda açılan, WhatsApp'ta görselli önizleme çıkan modern dijital davetiyeler.
**Astro** ile kuruldu — build adımı sende, sunucu gerekmiyor, Vercel'e tek tıkla çıkar.

- Ana sayfa (`/`) → şablon **vitrini** (müşteriye "böyle bir şey yapıyorum" dediğin sayfa)
- Her davetiye kendi linkinde → `/davet/emre-funda`, `/davet/defne-6-yas`, `/davet/atolye-acilis`

---

## 1) Çalıştırma (bilgisayarında önizleme)

```bash
npm install      # ilk seferde bir kez
npm run dev      # http://localhost:4321 adresini aç
```

Üretim için:

```bash
npm run build    # dist/ klasörüne statik site üretir
npm run preview  # üretilen siteyi yerelde dener
```

---

## 2) Yeni bir müşteri / etkinlik eklemek

**Kod bilmene gerek yok.** İçerik tek yerde: `src/data/` klasörü.

1. `src/data/emre-funda.ts` dosyasını kopyala, yeni bir isim ver
   (örn. `src/data/ayse-mehmet.ts`).
2. İçindeki tırnak (`" "`) içindeki yazıları değiştir. Başındaki Türkçe
   yorumlar hangi alanın ne olduğunu anlatıyor.
3. `src/data/index.ts` dosyasını aç, yeni dosyayı `import` edip listeye ekle:

   ```ts
   import { ayseMehmet } from './ayse-mehmet';
   export const davetiyeler = [emreFunda, ayseMehmet, ...];
   ```

Site otomatik olarak `/davet/<slug>` adresinde yeni sayfayı üretir.
`vitrindeGoster: false` yaparsan ana sayfa vitrininde görünmez (sadece linki bilen açar).

### Değiştirilecek başlıca alanlar
| Alan | Ne işe yarar |
|---|---|
| `isimler`, `monogram`, `altBaslik` | Açılış ve Hero'daki büyük yazılar |
| `tarihISO` | Geri sayım + takvim (biçim: `2026-09-19T19:00`) |
| `tarihMetni` | Ekranda görünen okunur tarih |
| `davetMetni` | Davet metni (2-3 cümle) |
| `program` | Program akışı satırları (ekle/çıkar serbest) |
| `heroFoto`, `galeri` | Fotoğraflar (`src` ve `alt` doldur) |
| `mekanAdi`, `mekanAdres`, `haritaLinki` | Mekân + yol tarifi |
| `whatsappNumara` | Katılım mesajının gideceği numara (`905XXXXXXXXX`, **+ yok**) |
| `ogBaslik`, `ogAciklama`, `ogGorsel` | WhatsApp önizleme kartı |
| `temaRengi` | Tarayıcı üst çubuğu + kart vurgu rengi |

---

## 3) Vercel'e deploy

1. Projeyi GitHub'a yükle (yeni repo → push).
2. [vercel.com](https://vercel.com) → **Add New → Project** → repoyu seç.
3. Vercel Astro'yu otomatik tanır. Ayar değiştirmene gerek yok → **Deploy**.
4. Sana `https://xxxx.vercel.app` gibi bir adres verir.

### ⚠️ Deploy sonrası TEK zorunlu adım
`astro.config.mjs` dosyasındaki `site` adresini **kendi Vercel adresinle** değiştir:

```js
site: 'https://SENIN-ADRESIN.vercel.app',
```

Bu adres olmadan WhatsApp önizleme kartındaki `og:image` ve `og:url` **tam adres**
üretemez ve kart bozuk çıkar. Değişikliği push et, Vercel otomatik yeniden deploy eder.

---

## 4) WhatsApp önizleme kartı (1200×630) nasıl hazırlanır

Link WhatsApp'ta paylaşılınca çıplak adres yerine **görselli kart** çıksın diye
her davetiyenin bir `ogGorsel`'i var. İyi bir kart şöyle hazırlanır:

- **Ölçü:** tam **1200 × 630 piksel** (yatay). Bu oran şart, yoksa kırpılır.
- **İçerik:** çiftin/etkinliğin adı + tarih + sade bir görsel. Metni **ortada ve büyük** tut;
  WhatsApp önizlemede küçük görünür.
- **Kenar boşluğu:** yazıları kenardan ~80 px içeride tut (bazı yerlerde kenarlar kırpılır).
- **Nasıl yapılır:** Canva'da "Custom size → 1200 × 630" ile 5 dakikada hazırlanır.
  Alternatif: Figma, Photoshop veya hazır bir düğün fotoğrafını bu orana kırp.
- **Yayınlama:** görseli `public/` klasörüne koy (örn. `public/og-emre-funda.jpg`) ve
  veri dosyasında `ogGorsel`'i tam adresle yaz:
  `https://SENIN-ADRESIN.vercel.app/og-emre-funda.jpg`
  (Şu an demo, Unsplash linki kullanıyor; kendi kartını koyunca daha profesyonel olur.)
- Ana sayfa vitrini için de `public/og-vitrin.jpg` (1200×630) koyabilirsin.

> İpucu: Paylaşmadan önce kartı test etmek için
> [opengraph.xyz](https://www.opengraph.xyz) adresine linkini yapıştır.
> WhatsApp önizlemeyi bir süre önbelleğe alır; ilk paylaşımda görünmezse
> linkin sonuna `?v=2` gibi bir ek koyup tekrar dene.

---

## Teknik notlar
- Framework dışında dış kütüphane yok. Geri sayım, `.ics` takvim, galeri büyütme ve
  WhatsApp formu saf JavaScript ile çalışır.
- `localStorage`/`sessionStorage` **kullanılmaz**, sunucu/veritabanı **yok**.
- Mobil öncelikli (max 560px, ortalanmış), erişilebilir (klavye odağı, alt metinler,
  `prefers-reduced-motion` desteği).
- Renk paleti ve fontlar `src/styles/global.css` içinde tek yerden yönetilir.
