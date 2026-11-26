const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outDir = path.resolve(__dirname, '../public/brand');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Destination in artifact directory for direct viewing/download
const artifactDir = 'C:\\Users\\Shibabrata\\.gemini\\antigravity\\brain\\bae76972-a643-4f2e-a0a7-9955586f62b4';

const wing = 'M 18 24 C 22 23 30 22 42 22 L 78 22 C 86 22 88 25 82 28 C 76 31 68 33 58 34 L 38 34 C 26 34 18 30 18 24 Z';
const stem = 'M 44 32 C 55 32 72 31 78 35 C 72 40 60 44 48 44 C 44 44 42 47 42 52 L 42 78 C 42 84 46 86 52 83 L 52 86 C 45 88 38 88 34 83 C 32 80 32 72 32 64 L 32 46 C 32 37 37 32 44 32 Z';

// 1. Signature Teal Gradient Logo (Transparent 1024x1024)
const svgTeal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024">
  <defs>
    <linearGradient id="tealGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="50%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
  </defs>
  <path d="${wing}" fill="url(#tealGrad)"/>
  <path d="${stem}" fill="url(#tealGrad)"/>
</svg>`;

// 2. Pure Matte Ink Charcoal Logo (Transparent 1024x1024)
const svgCharcoal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024">
  <path d="${wing}" fill="#191919"/>
  <path d="${stem}" fill="#191919"/>
</svg>`;

// 3. Crisp White Logo (Transparent 1024x1024)
const svgWhite = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024">
  <path d="${wing}" fill="#FFFFFF"/>
  <path d="${stem}" fill="#FFFFFF"/>
</svg>`;

// 4. Premium App Icon with Dark Rounded Chassis (1024x1024)
const svgAppIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1024" height="1024">
  <defs>
    <linearGradient id="tealGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="50%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
    <linearGradient id="chassisGrad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#27272A"/>
      <stop offset="100%" stop-color="#141416"/>
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="url(#chassisGrad)"/>
  <rect x="1" y="1" width="98" height="98" rx="21" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
  <path d="${wing}" fill="url(#tealGrad)"/>
  <path d="${stem}" fill="url(#tealGrad)"/>
</svg>`;

// 5. Full Horizontal Lockup: Logo + 'Tessimo Technology' (2080x480)
const svgHorizontal = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 120" width="2080" height="480">
  <defs>
    <linearGradient id="tealGrad" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2DD4BF"/>
      <stop offset="50%" stop-color="#0D9488"/>
      <stop offset="100%" stop-color="#0F766E"/>
    </linearGradient>
  </defs>
  <g transform="translate(15, 10) scale(1)">
    <path d="${wing}" fill="url(#tealGrad)"/>
    <path d="${stem}" fill="url(#tealGrad)"/>
  </g>
  <text x="135" y="68" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="42" font-weight="600" letter-spacing="-0.03em" fill="#191919">Tessimo</text>
  <text x="138" y="92" font-family="'SF Mono', Monaco, monospace" font-size="14" font-weight="500" letter-spacing="0.2em" fill="#66635E">TECHNOLOGY</text>
</svg>`;

async function generate() {
  const tasks = [
    { name: 'tessimo-logo-teal.png', svg: svgTeal },
    { name: 'tessimo-logo-charcoal.png', svg: svgCharcoal },
    { name: 'tessimo-logo-white.png', svg: svgWhite },
    { name: 'tessimo-app-icon.png', svg: svgAppIcon },
    { name: 'tessimo-logo-horizontal.png', svg: svgHorizontal },
  ];

  for (const t of tasks) {
    const publicPath = path.join(outDir, t.name);
    await sharp(Buffer.from(t.svg)).png().toFile(publicPath);
    console.log(`Saved: ${publicPath}`);

    if (fs.existsSync(artifactDir)) {
      const artifactPath = path.join(artifactDir, t.name);
      await sharp(Buffer.from(t.svg)).png().toFile(artifactPath);
      console.log(`Saved to artifactDir: ${artifactPath}`);
    }
  }
}

generate().catch(console.error);
