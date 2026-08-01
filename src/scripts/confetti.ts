// ============================================================
//  KONFETİ — saf canvas, dış kütüphane YOK.
//  konfetiPatlat() çağrıldığında ekranda kısa bir kutlama patlaması olur.
//  prefers-reduced-motion açıksa hiç çalışmaz (erişilebilirlik).
// ============================================================

type Parca = {
  x: number; y: number;
  vx: number; vy: number;
  rot: number; vr: number;
  renk: string; boy: number;
  omur: number; yas: number;
  sekil: 0 | 1;
};

const renkler = ['#CE8E5C', '#E0A874', '#A7BEB0', '#F5EFE4', '#E7DCC9'];

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let parcalar: Parca[] = [];
let calisiyor = false;

function boyutla() {
  if (!canvas || !ctx) return;
  const d = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * d;
  canvas.height = window.innerHeight * d;
  ctx.setTransform(d, 0, 0, d, 0, 0);
}

function hazirla() {
  if (canvas) return;
  canvas = document.createElement('canvas');
  canvas.style.cssText =
    'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:300';
  document.body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  boyutla();
  window.addEventListener('resize', boyutla);
}

export function konfetiPatlat(opt: { x?: number; y?: number; adet?: number } = {}) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  hazirla();
  const x = opt.x ?? window.innerWidth / 2;
  const y = opt.y ?? window.innerHeight * 0.5;
  const adet = opt.adet ?? 130;

  for (let i = 0; i < adet; i++) {
    const aci = Math.random() * Math.PI * 2;
    const hiz = 4 + Math.random() * 7;
    parcalar.push({
      x, y,
      vx: Math.cos(aci) * hiz,
      vy: Math.sin(aci) * hiz - 3,
      rot: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.4,
      renk: renkler[Math.floor(Math.random() * renkler.length)],
      boy: 6 + Math.random() * 7,
      omur: 70 + Math.random() * 45,
      yas: 0,
      sekil: Math.random() < 0.5 ? 0 : 1,
    });
  }

  if (!calisiyor) {
    calisiyor = true;
    requestAnimationFrame(dongu);
  }
}

function dongu() {
  if (!ctx || !canvas) {
    calisiyor = false;
    return;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of parcalar) {
    p.yas++;
    p.vy += 0.18;      // yerçekimi
    p.vx *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    const saydam = Math.max(0, 1 - p.yas / p.omur);

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = saydam;
    ctx.fillStyle = p.renk;
    if (p.sekil === 0) {
      ctx.fillRect(-p.boy / 2, -p.boy / 2, p.boy, p.boy * 0.6);
    } else {
      ctx.beginPath();
      ctx.ellipse(0, 0, p.boy / 2, p.boy / 3, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  parcalar = parcalar.filter((p) => p.yas < p.omur && p.y < window.innerHeight + 40);

  if (parcalar.length > 0) {
    requestAnimationFrame(dongu);
  } else {
    calisiyor = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
