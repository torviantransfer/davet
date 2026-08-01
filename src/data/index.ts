import type { Davetiye } from './types';
import { emreFunda } from './emre-funda';
import { dogumGunu } from './ornek-dogumgunu';
import { acilis } from './ornek-acilis';

// ============================================================
//  TÜM DAVETİYELER  (liste)
// ------------------------------------------------------------
//  Yeni bir müşteri/etkinlik eklemek için:
//   1) src/data/ altında yeni bir dosya oluştur (örneği kopyala),
//   2) yukarıda "import" ile buraya çağır,
//   3) aşağıdaki listeye ekle.
//  Site otomatik olarak /davet/<slug> adresinde yeni sayfayı üretir.
// ============================================================

export const davetiyeler: Davetiye[] = [
  emreFunda,
  dogumGunu,
  acilis,
];
