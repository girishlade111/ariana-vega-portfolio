import fs from 'node:fs';
import sharp from 'sharp';

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

ensureDir('src/assets/hero');
ensureDir('src/assets/about');
ensureDir('src/assets/projects');
ensureDir('public');

// 1. HERO SUBJECT (1600x2000 PNG transparent cutout)
const heroSubjectSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 2000" width="1600" height="2000">
  <defs>
    <radialGradient id="sunGlow" cx="40%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#FFD3A1" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#F26B3A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#3A1A3D" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD7BA"/>
      <stop offset="30%" stop-color="#F28B62"/>
      <stop offset="70%" stop-color="#D9534F"/>
      <stop offset="100%" stop-color="#4A1838"/>
    </linearGradient>
    <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFF2D6" stop-opacity="0.9"/>
      <stop offset="30%" stop-color="#FF9B54" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#FF9B54" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="hairGrad" x1="30%" y1="10%" x2="80%" y2="90%">
      <stop offset="0%" stop-color="#3A1428"/>
      <stop offset="50%" stop-color="#220B1A"/>
      <stop offset="100%" stop-color="#140610"/>
    </linearGradient>
    <linearGradient id="glassLens" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF3E4D" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#9E1B46" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="16" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <g id="figure" transform="translate(100, 40)">
    <!-- Back & Bare Shoulder Curve -->
    <path d="M 450 1500 C 420 1250, 470 1000, 580 820 C 650 710, 760 620, 880 580 C 1000 620, 1080 750, 1140 920 C 1220 1150, 1260 1450, 1280 1960 L 320 1960 C 370 1800, 410 1650, 450 1500 Z" fill="url(#skinGrad)" />
    
    <!-- Delicate Black Dress/Camisole Strap -->
    <path d="M 680 850 C 660 1000, 640 1200, 610 1600" stroke="#1A0818" stroke-width="12" stroke-linecap="round"/>
    <path d="M 940 880 C 960 1100, 970 1350, 960 1600" stroke="#1A0818" stroke-width="8" stroke-linecap="round"/>
    <path d="M 520 1500 C 680 1450, 850 1470, 1050 1520 L 1120 1960 L 450 1960 Z" fill="#180718"/>

    <!-- Neck & Jawline turned over shoulder -->
    <path d="M 760 680 C 720 540, 780 430, 870 380 C 960 330, 1050 360, 1080 480 C 1070 590, 990 680, 880 720 C 820 730, 780 710, 760 680 Z" fill="url(#skinGrad)"/>
    
    <!-- Face Profile / 3/4 turn -->
    <path d="M 850 380 C 880 320, 970 300, 1040 330 C 1090 350, 1130 400, 1140 460 C 1145 520, 1100 590, 1040 620 C 980 650, 920 640, 870 590 C 830 530, 820 440, 850 380 Z" fill="url(#skinGrad)"/>
    
    <!-- Cheekbone Highlight & Warmth -->
    <ellipse cx="980" cy="460" rx="90" ry="60" fill="#F0505A" opacity="0.3" filter="url(#softGlow)"/>
    <ellipse cx="1060" cy="450" rx="40" ry="30" fill="#FFD3A1" opacity="0.5" filter="url(#softGlow)"/>

    <!-- Lips with rich terracotta coral -->
    <path d="M 970 550 C 990 540, 1030 540, 1050 555 C 1030 575, 990 575, 970 550 Z" fill="#D9384E"/>
    <path d="M 985 552 C 1005 545, 1025 545, 1035 552" stroke="#661022" stroke-width="4"/>

    <!-- Left Ear & Gold Earring -->
    <path d="M 840 470 C 820 480, 810 520, 830 550 C 850 570, 870 550, 870 510 Z" fill="#E67355"/>
    <circle cx="830" cy="560" r="28" fill="none" stroke="#F9AE55" stroke-width="8"/>
    <circle cx="830" cy="560" r="24" fill="none" stroke="#FFD782" stroke-width="3"/>

    <!-- Red-tinted 90s/Y2K sunglasses slid down nose -->
    <!-- Left lens -->
    <path d="M 880 445 C 910 435, 955 435, 975 450 C 985 475, 950 500, 915 500 C 875 500, 860 465, 880 445 Z" fill="url(#glassLens)" stroke="#FF6B7A" stroke-width="6"/>
    <!-- Right lens -->
    <path d="M 1005 455 C 1035 445, 1080 445, 1105 465 C 1115 490, 1075 515, 1040 515 C 1000 515, 990 480, 1005 455 Z" fill="url(#glassLens)" stroke="#FF6B7A" stroke-width="6"/>
    <!-- Bridge & Temples -->
    <path d="M 975 455 C 985 450, 995 450, 1005 458" fill="none" stroke="#F9AE55" stroke-width="7"/>
    <path d="M 880 455 L 830 475" stroke="#F9AE55" stroke-width="7"/>
    <!-- Glasses white glare streak -->
    <path d="M 900 450 L 960 485" stroke="#FFF" stroke-width="5" stroke-linecap="round" opacity="0.6"/>
    <path d="M 1025 460 L 1085 495" stroke="#FFF" stroke-width="5" stroke-linecap="round" opacity="0.6"/>

    <!-- Eyes peering above/through sunglasses -->
    <path d="M 900 415 C 920 405, 945 405, 960 420" stroke="#1A0612" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="930" cy="425" rx="14" ry="12" fill="#2E1005"/>
    <circle cx="934" cy="422" r="4" fill="#FFF"/>

    <path d="M 1020 422 C 1040 415, 1065 415, 1080 428" stroke="#1A0612" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="1050" cy="430" rx="13" ry="11" fill="#2E1005"/>
    <circle cx="1054" cy="427" r="4" fill="#FFF"/>

    <!-- Expressive Eyebrows -->
    <path d="M 885 390 C 915 375, 950 375, 970 395" fill="none" stroke="#250918" stroke-width="12" stroke-linecap="round"/>
    <path d="M 1010 395 C 1035 385, 1070 385, 1095 405" fill="none" stroke="#250918" stroke-width="12" stroke-linecap="round"/>

    <!-- Hair: Main Volume, Bun and Tendrils -->
    <!-- Messy Top Bun -->
    <ellipse cx="980" cy="180" rx="190" ry="140" fill="url(#hairGrad)"/>
    <circle cx="910" cy="150" r="110" fill="url(#hairGrad)"/>
    <circle cx="1050" cy="150" r="110" fill="url(#hairGrad)"/>
    <ellipse cx="980" cy="120" rx="130" ry="90" fill="#3D1225"/>

    <!-- Hair Base Around Head -->
    <path d="M 800 360 C 760 220, 850 180, 960 220 C 1080 180, 1180 230, 1160 380 C 1180 480, 1140 600, 1080 620 C 1110 520, 1090 400, 1040 360 C 970 310, 860 320, 800 360 Z" fill="url(#hairGrad)"/>
    <path d="M 760 480 C 720 380, 770 280, 830 250 C 800 320, 800 420, 820 480 Z" fill="url(#hairGrad)"/>

    <!-- Wispy Hair Tendrils with Golden Rim Light -->
    <path d="M 790 320 Q 740 400 780 490 Q 750 560 790 620" fill="none" stroke="#FF9B54" stroke-width="10" stroke-linecap="round" filter="url(#softGlow)"/>
    <path d="M 785 320 Q 735 400 775 490" fill="none" stroke="#250918" stroke-width="7"/>

    <path d="M 1120 300 Q 1200 380 1170 500 Q 1220 580 1160 680" fill="none" stroke="#FFD3A1" stroke-width="12" stroke-linecap="round" filter="url(#softGlow)"/>
    <path d="M 1115 300 Q 1195 380 1165 500" fill="none" stroke="#250918" stroke-width="8"/>

    <!-- Individual hair strands on bun -->
    <path d="M 850 120 C 910 60, 990 60, 1060 110" fill="none" stroke="#FFB066" stroke-width="8" stroke-linecap="round"/>
    <path d="M 890 80 C 950 40, 1020 40, 1090 90" fill="none" stroke="#FF8A42" stroke-width="6" stroke-linecap="round"/>
    <path d="M 810 160 C 770 120, 790 70, 850 70" fill="none" stroke="#FFD3A1" stroke-width="6" stroke-linecap="round"/>
    <path d="M 1100 130 C 1170 110, 1200 160, 1160 220" fill="none" stroke="#FF8A42" stroke-width="8" stroke-linecap="round"/>

    <!-- Golden Rim Light Contour around back & shoulder -->
    <path d="M 680 730 C 600 850, 520 1020, 480 1250 C 450 1450, 430 1650, 390 1960" fill="none" stroke="url(#rimLight)" stroke-width="26" filter="url(#softGlow)"/>
    <path d="M 870 380 C 780 430, 740 550, 750 670 C 770 710, 810 740, 870 730" fill="none" stroke="#FFD3A1" stroke-width="14" opacity="0.8" filter="url(#softGlow)"/>
  </g>
</svg>
`;

// 2. ABOUT PORTRAIT (900x1100 JPG)
const aboutPortraitSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100" width="900" height="1100">
  <defs>
    <linearGradient id="bgWarm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF9642"/>
      <stop offset="40%" stop-color="#F2583E"/>
      <stop offset="80%" stop-color="#A82855"/>
      <stop offset="100%" stop-color="#3A1032"/>
    </linearGradient>
    <radialGradient id="sunBurst" cx="20%" cy="20%" r="70%">
      <stop offset="0%" stop-color="#FFE7B8" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#FF7D42" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#FF7D42" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFDBBF"/>
      <stop offset="50%" stop-color="#F08765"/>
      <stop offset="100%" stop-color="#732545"/>
    </linearGradient>
    <filter id="bokeh" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="22"/>
    </filter>
  </defs>

  <rect width="900" height="1100" fill="url(#bgWarm)"/>
  <circle cx="180" cy="180" r="320" fill="url(#sunBurst)"/>

  <!-- Blurred tropical palm backdrop bokeh -->
  <g opacity="0.35" filter="url(#bokeh)">
    <circle cx="750" cy="200" r="140" fill="#FFD3A1"/>
    <circle cx="850" cy="450" r="180" fill="#FFA352"/>
    <path d="M-50 100 C 200 150, 400 350, 500 700 C 350 500, 100 300, -50 100 Z" fill="#24071F"/>
    <path d="M 950 50 C 700 200, 550 450, 450 800 C 600 550, 800 300, 950 50 Z" fill="#24071F"/>
  </g>

  <!-- Ariana in round sunglasses smiling over shoulder -->
  <g transform="translate(60, 100)">
    <!-- Shoulders & Back -->
    <path d="M 120 1000 C 150 780, 240 640, 380 540 C 500 450, 640 480, 740 600 C 800 700, 820 850, 840 1000 Z" fill="url(#skin)"/>
    <!-- Dress / top -->
    <path d="M 220 740 C 360 690, 560 700, 720 760 L 780 1000 L 140 1000 Z" fill="#1C091C"/>

    <!-- Head & Neck -->
    <path d="M 380 480 C 360 380, 410 280, 500 240 C 580 200, 680 230, 700 340 C 710 440, 640 520, 540 540 C 460 550, 400 530, 380 480 Z" fill="url(#skin)"/>

    <!-- Round Sunglasses -->
    <!-- Left circle -->
    <circle cx="490" cy="360" r="48" fill="#FF4455" opacity="0.9" stroke="#FFA352" stroke-width="6"/>
    <circle cx="490" cy="360" r="42" fill="#2A0B1A" opacity="0.4"/>
    <circle cx="475" cy="345" r="14" fill="#FFF" opacity="0.6"/>
    <!-- Right circle -->
    <circle cx="600" cy="375" r="48" fill="#FF4455" opacity="0.9" stroke="#FFA352" stroke-width="6"/>
    <circle cx="600" cy="375" r="42" fill="#2A0B1A" opacity="0.4"/>
    <circle cx="585" cy="360" r="14" fill="#FFF" opacity="0.6"/>
    <!-- Bridge -->
    <path d="M 538 365 Q 550 355 554 368" stroke="#FFA352" stroke-width="6" fill="none"/>

    <!-- Cheerful Lip Smile -->
    <path d="M 520 460 Q 560 495 600 465" stroke="#E63956" stroke-width="10" stroke-linecap="round" fill="#731828"/>

    <!-- Hair with breezy strands and bun -->
    <ellipse cx="570" cy="180" rx="140" ry="110" fill="#260C1D"/>
    <path d="M 420 300 C 380 200, 460 140, 560 160 C 670 120, 750 190, 720 320 C 740 420, 700 500, 650 540 C 680 440, 670 340, 620 300 C 550 250, 460 270, 420 300 Z" fill="#260C1D"/>
    <!-- Stray locks with sunlight -->
    <path d="M 390 260 Q 330 340 370 440" stroke="#FFBE7A" stroke-width="8" stroke-linecap="round" fill="none"/>
    <path d="M 680 220 Q 750 300 720 420" stroke="#FF9642" stroke-width="9" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Palm frond silhouette in bottom foreground -->
  <g fill="#170617" opacity="0.75">
    <path d="M-20 1120 C 80 950, 250 850, 420 800 C 260 880, 120 1000, -20 1120 Z"/>
    <path d="M 920 1120 C 800 960, 650 880, 480 840 C 640 910, 780 1010, 920 1120 Z"/>
  </g>
</svg>
`;

// 3. QUOTE SKY (800x1000 JPG)
const quoteSkySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4A184D"/>
      <stop offset="25%" stop-color="#7B235E"/>
      <stop offset="55%" stop-color="#DD4B5A"/>
      <stop offset="80%" stop-color="#F27742"/>
      <stop offset="100%" stop-color="#FFA852"/>
    </linearGradient>
    <radialGradient id="cloudGlow" cx="50%" cy="65%" r="50%">
      <stop offset="0%" stop-color="#FFE7C4" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#F46648" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#A62C60" stop-opacity="0"/>
    </radialGradient>
    <filter id="cloudBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30"/>
    </filter>
  </defs>

  <rect width="800" height="1000" fill="url(#skyGrad)"/>
  <rect width="800" height="1000" fill="url(#cloudGlow)"/>

  <!-- Majestic sunset cumulus cloud formations -->
  <g opacity="0.65" filter="url(#cloudBlur)">
    <ellipse cx="250" cy="520" rx="300" ry="120" fill="#FFCBA4"/>
    <ellipse cx="580" cy="480" rx="260" ry="100" fill="#FF8D63"/>
    <ellipse cx="400" cy="620" rx="360" ry="140" fill="#FFE2B8"/>
    <ellipse cx="180" cy="350" rx="220" ry="80" fill="#94265A"/>
    <ellipse cx="650" cy="320" rx="240" ry="90" fill="#691C50"/>
  </g>

  <!-- Palm trees silhouette at the bottom -->
  <g fill="#1B0C22">
    <!-- Tree 1 on right -->
    <path d="M 680 1000 Q 660 850 640 700 Q 645 700 655 850 L 695 1000 Z"/>
    <!-- Fronds -->
    <path d="M 640 700 C 580 640, 480 630, 420 660 C 490 665, 570 680, 640 700 Z"/>
    <path d="M 640 700 C 600 610, 520 560, 440 560 C 510 590, 580 640, 640 700 Z"/>
    <path d="M 640 700 C 640 590, 630 520, 600 480 C 625 540, 640 620, 640 700 Z"/>
    <path d="M 640 700 C 680 600, 740 550, 810 540 C 750 580, 700 630, 640 700 Z"/>
    <path d="M 640 700 C 720 640, 800 630, 860 670 C 790 675, 710 685, 640 700 Z"/>
    <path d="M 640 700 C 720 720, 790 770, 830 840 C 770 780, 700 740, 640 700 Z"/>

    <!-- Secondary palm further left -->
    <path d="M 220 1000 Q 240 880 260 760 Q 252 760 232 880 L 210 1000 Z"/>
    <path d="M 260 760 C 200 720, 130 730, 70 760 C 130 755, 200 755, 260 760 Z"/>
    <path d="M 260 760 C 220 690, 160 660, 90 670 C 150 685, 210 720, 260 760 Z"/>
    <path d="M 260 760 C 260 670, 270 620, 310 590 C 290 640, 280 700, 260 760 Z"/>
    <path d="M 260 760 C 310 700, 370 680, 430 690 C 370 715, 310 735, 260 760 Z"/>
  </g>
</svg>
`;

// 4. WILD SOUL (1200x1000 JPG)
const wildSoulSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1000" width="1200" height="1000">
  <defs>
    <linearGradient id="bgWild" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7893C"/>
      <stop offset="45%" stop-color="#E85340"/>
      <stop offset="85%" stop-color="#9C2C58"/>
      <stop offset="100%" stop-color="#3D122E"/>
    </linearGradient>
    <linearGradient id="laptopBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2D2830"/>
      <stop offset="100%" stop-color="#141016"/>
    </linearGradient>
    <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFA862"/>
      <stop offset="50%" stop-color="#EB5A40"/>
      <stop offset="100%" stop-color="#6B1F3E"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="25" stdDeviation="35" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bgWild)"/>

  <!-- Warm ambient glow on table surface -->
  <ellipse cx="600" cy="850" rx="480" ry="80" fill="#FFBE7A" opacity="0.35"/>

  <!-- Laptop Mockup in Center -->
  <g transform="translate(160, 160)" filter="url(#shadow)">
    <!-- Display Lid Outside Frame -->
    <rect x="60" y="40" width="760" height="490" rx="20" fill="url(#laptopBody)" stroke="#4A4250" stroke-width="4"/>
    <!-- Webcam -->
    <circle cx="440" cy="56" r="3.5" fill="#0A080C"/>

    <!-- Screen Bezel & Display Area -->
    <rect x="80" y="72" width="720" height="440" rx="6" fill="url(#screenGrad)"/>

    <!-- Screen Content: "WILD SOUL" Studio Website -->
    <g transform="translate(80, 72)">
      <!-- Mini Browser Header -->
      <rect width="720" height="32" fill="#200C1B" opacity="0.8"/>
      <circle cx="20" cy="16" r="4" fill="#FF5F56"/>
      <circle cx="34" cy="16" r="4" fill="#FFBD2E"/>
      <circle cx="48" cy="16" r="4" fill="#27C93F"/>
      <text x="360" y="21" font-family="'Jost', sans-serif" font-size="11" fill="#FFD3A1" text-anchor="middle" letter-spacing="0.15em">WILDSOULSTUDIO.COM</text>

      <!-- Woman with Big Curly Hair Silhouette -->
      <g transform="translate(260, 60)" fill="#1B0716">
        <!-- Big voluminous curly afro hair -->
        <circle cx="100" cy="110" r="85"/>
        <circle cx="40" cy="100" r="60"/>
        <circle cx="160" cy="100" r="60"/>
        <circle cx="70" cy="45" r="55"/>
        <circle cx="130" cy="45" r="55"/>
        <circle cx="20" cy="150" r="45"/>
        <circle cx="180" cy="150" r="45"/>
        <!-- Face silhouette & neck -->
        <path d="M 80 140 C 95 140, 110 150, 115 170 C 115 190, 95 210, 75 210 Z"/>
        <path d="M 70 200 L 60 290 L 140 290 L 130 200 Z"/>
        <path d="M 20 280 C 60 260, 140 260, 180 280 L 190 320 L 10 320 Z"/>
      </g>

      <!-- Striking Cream Serif Headline "WILD SOUL" -->
      <text x="130" y="320" font-family="'Bodoni Moda', 'Didot', serif" font-weight="700" font-size="76" fill="#F8E6D6" letter-spacing="0.08em">WILD</text>
      <text x="430" y="320" font-family="'Bodoni Moda', 'Didot', serif" font-weight="700" font-size="76" fill="#F8E6D6" letter-spacing="0.08em">SOUL</text>
      <text x="360" y="375" font-family="'Jost', sans-serif" font-size="13" font-weight="500" fill="#FFD3A1" text-anchor="middle" letter-spacing="0.3em">CREATIVE DIRECTION &amp; BRANDING</text>
    </g>

    <!-- Laptop Base / Keyboard deck -->
    <path d="M 0 530 L 880 530 L 820 575 L 60 575 Z" fill="#221E26" stroke="#4A4250" stroke-width="2"/>
    <!-- Trackpad notch -->
    <path d="M 380 532 L 500 532 L 495 538 L 385 538 Z" fill="#4A4250"/>
  </g>
</svg>
`;

// 5. PLANTA (1200x1000 JPG)
const plantaSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1000" width="1200" height="1000">
  <defs>
    <linearGradient id="bgPlanta" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F26A3C"/>
      <stop offset="50%" stop-color="#EB5645"/>
      <stop offset="100%" stop-color="#9C274E"/>
    </linearGradient>
    <filter id="shadowPlanta" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="1200" height="1000" fill="url(#bgPlanta)"/>

  <!-- Desktop Browser Mockup (Beige/Cream) -->
  <g transform="translate(140, 140)" filter="url(#shadowPlanta)">
    <rect width="680" height="520" rx="16" fill="#F4EADB" stroke="#E2D4BF" stroke-width="2"/>
    
    <!-- Browser Top Bar -->
    <rect width="680" height="40" rx="16" fill="#EADCC9"/>
    <circle cx="24" cy="20" r="5" fill="#D9534F"/>
    <circle cx="40" cy="20" r="5" fill="#F0AD4E"/>
    <circle cx="56" cy="20" r="5" fill="#5CB85C"/>

    <!-- Website Header -->
    <text x="40" y="85" font-family="'Jost', sans-serif" font-weight="700" font-size="24" fill="#243322">planta.</text>
    <text x="320" y="82" font-family="'Jost', sans-serif" font-size="12" fill="#5A6658" letter-spacing="0.1em">SHOP  •  CARE GUIDE  •  SUSTAINABILITY</text>

    <!-- Headline -->
    <text x="40" y="155" font-family="'Bodoni Moda', serif" font-weight="700" font-size="34" fill="#1C281B">Bring Nature</text>
    <text x="40" y="195" font-family="'Bodoni Moda', serif" font-weight="700" font-size="34" fill="#1C281B">Into Your Space</text>

    <text x="40" y="240" font-family="'Jost', sans-serif" font-size="13" fill="#6B7869" width="220">
      Hand-selected air-purifying plants curated for modern homes.
    </text>

    <!-- Two Buttons -->
    <rect x="40" y="270" width="105" height="34" rx="6" fill="#1C281B"/>
    <text x="92" y="292" font-family="'Jost', sans-serif" font-size="11" font-weight="600" fill="#FFF" text-anchor="middle">EXPLORE</text>
    
    <rect x="155" y="270" width="95" height="34" rx="6" fill="none" stroke="#1C281B" stroke-width="1.5"/>
    <text x="202" y="292" font-family="'Jost', sans-serif" font-size="11" font-weight="600" fill="#1C281B" text-anchor="middle">CARE APP</text>

    <!-- Plant Photo in Website Card -->
    <rect x="360" y="120" width="280" height="340" rx="12" fill="#DFD2BE"/>
    <!-- Potted Monstera / Fiddle Leaf Fig illustration -->
    <g transform="translate(420, 160)">
      <!-- Pot -->
      <path d="M 50 180 L 110 180 L 95 240 L 65 240 Z" fill="#C87856"/>
      <!-- Leaves -->
      <path d="M 80 180 C 40 120, 10 90, 0 60 C 20 60, 60 100, 80 170" fill="#2E5A36"/>
      <path d="M 80 180 C 80 90, 80 50, 75 10 C 95 30, 105 80, 80 170" fill="#3D7547"/>
      <path d="M 80 180 C 120 110, 150 80, 160 50 C 140 60, 110 100, 80 170" fill="#24482B"/>
    </g>
  </g>

  <!-- Black Smartphone in Front (Right-tilted) -->
  <g transform="translate(680, 220)" filter="url(#shadowPlanta)">
    <!-- Phone Body -->
    <rect width="280" height="560" rx="42" fill="#161418" stroke="#38343C" stroke-width="6"/>
    <!-- Dynamic Island / Speaker -->
    <rect x="100" y="16" width="80" height="18" rx="9" fill="#0A080C"/>

    <!-- App Screen -->
    <rect x="14" y="44" width="252" height="498" rx="30" fill="#2B3E2F"/>

    <!-- App UI Content -->
    <text x="35" y="85" font-family="'Jost', sans-serif" font-size="12" font-weight="600" fill="#A8D5BA">DAILY WATERING</text>
    <text x="35" y="115" font-family="'Bodoni Moda', serif" font-size="22" font-weight="700" fill="#FFF">Monstera Deliciosa</text>

    <!-- Indoor Plant Image in App -->
    <rect x="35" y="135" width="210" height="220" rx="16" fill="#1F2E23"/>
    <circle cx="140" cy="230" r="70" fill="#3D7349" opacity="0.6"/>
    <path d="M 140 270 C 120 200, 90 170, 70 160 C 100 160, 130 200, 140 270 Z" fill="#71B380"/>
    <path d="M 140 270 C 160 190, 190 170, 210 150 C 180 160, 150 200, 140 270 Z" fill="#529461"/>

    <!-- Stats pills -->
    <rect x="35" y="375" width="98" height="45" rx="10" fill="#374F3C"/>
    <text x="50" y="395" font-family="'Jost', sans-serif" font-size="10" fill="#A8D5BA">LIGHT</text>
    <text x="50" y="410" font-family="'Jost', sans-serif" font-size="12" font-weight="600" fill="#FFF">Bright Indirect</text>

    <rect x="147" y="375" width="98" height="45" rx="10" fill="#374F3C"/>
    <text x="162" y="395" font-family="'Jost', sans-serif" font-size="10" fill="#A8D5BA">WATER</text>
    <text x="162" y="410" font-family="'Jost', sans-serif" font-size="12" font-weight="600" fill="#FFF">Every 7 Days</text>

    <!-- Primary App CTA -->
    <rect x="35" y="440" width="210" height="46" rx="14" fill="#65A674"/>
    <text x="140" y="468" font-family="'Jost', sans-serif" font-size="13" font-weight="600" fill="#142618" text-anchor="middle">LOG WATERING</text>
  </g>

  <!-- Small White Floating Card with 3 Icons -->
  <g transform="translate(180, 560)" filter="url(#shadowPlanta)">
    <rect width="210" height="74" rx="14" fill="#FFFFFF"/>
    <!-- 3 icons & labels -->
    <circle cx="38" cy="37" r="16" fill="#F0F8F2"/>
    <path d="M 38 27 L 43 38 L 33 38 Z" fill="#2E6B3E"/>
    
    <circle cx="105" cy="37" r="16" fill="#FFF4E8"/>
    <circle cx="105" cy="37" r="8" fill="#F27742"/>

    <circle cx="172" cy="37" r="16" fill="#F5F0FB"/>
    <rect x="165" y="30" width="14" height="14" rx="3" fill="#8B4CA6"/>
  </g>
</svg>
`;

// 6. MOVE FREELY (1200x1000 JPG)
const moveFreelySvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1000" width="1200" height="1000">
  <defs>
    <linearGradient id="bgMove" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F97E3E"/>
      <stop offset="40%" stop-color="#F25638"/>
      <stop offset="80%" stop-color="#C4344E"/>
      <stop offset="100%" stop-color="#42132B"/>
    </linearGradient>
    <linearGradient id="silkFlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF637E" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#FF9680" stop-opacity="0.4"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="1000" fill="url(#bgMove)"/>

  <!-- Top-left generic dynamic brand mark (NO real swoosh) -->
  <g transform="translate(100, 80)">
    <!-- 3 dynamic angled motion slash bars -->
    <rect x="0" y="24" width="48" height="9" rx="4.5" transform="rotate(-25 0 24)" fill="#170613"/>
    <rect x="18" y="12" width="62" height="9" rx="4.5" transform="rotate(-25 18 12)" fill="#170613"/>
    <rect x="36" y="0" width="52" height="9" rx="4.5" transform="rotate(-25 36 0)" fill="#170613"/>
  </g>

  <!-- Big Bold Black Heavy Condensed Headline "MOVE FREELY" -->
  <text x="100" y="340" font-family="'Anton', 'Impact', sans-serif" font-size="170" fill="#140410" letter-spacing="0.02em">MOVE</text>
  <text x="100" y="500" font-family="'Anton', 'Impact', sans-serif" font-size="170" fill="#140410" letter-spacing="0.02em">FREELY</text>

  <!-- Subtitle -->
  <text x="105" y="560" font-family="'Jost', sans-serif" font-size="22" font-weight="600" fill="#FFD3A1" letter-spacing="0.15em">SPRING COLLECTION NOW LIVE</text>
  <rect x="105" y="590" width="180" height="46" rx="10" fill="#140410"/>
  <text x="195" y="619" font-family="'Jost', sans-serif" font-size="13" font-weight="600" fill="#FFF" text-anchor="middle" letter-spacing="0.2em">SHOP CAMPAIGN</text>

  <!-- Dynamic Dancing Woman in Pink Athleisure with Flowing Silk Ribbons -->
  <g transform="translate(740, 180)">
    <!-- Flowing silk ribbon trails -->
    <path d="M-120 300 C-60 180, 80 120, 220 200 C 320 250, 420 400, 360 620 C 300 780, 120 850, 20 800" fill="none" stroke="url(#silkFlow)" stroke-width="50" stroke-linecap="round"/>
    <path d="M-80 350 C-20 240, 110 200, 230 260 C 310 300, 380 430, 330 600" fill="none" stroke="#FF8598" stroke-width="20" stroke-linecap="round" opacity="0.6"/>

    <!-- Athlete Body -->
    <!-- Head & Hair Ponytail flying -->
    <ellipse cx="140" cy="180" rx="36" ry="42" fill="#591C34"/>
    <!-- Ponytail -->
    <path d="M 110 170 C 60 140, 10 140, -40 160 C 10 180, 70 200, 110 190 Z" fill="#2E0A1A"/>
    <!-- Face profile -->
    <path d="M 160 170 C 175 180, 175 200, 160 210 L 150 220 L 130 215 Z" fill="#E6735C"/>

    <!-- Torso in Vibrant Coral Athleisure Top -->
    <path d="M 120 220 C 100 280, 110 360, 130 420 C 150 420, 190 410, 200 390 C 210 320, 200 250, 170 220 Z" fill="#FF4768"/>
    
    <!-- Athletic Shorts / Leggings -->
    <path d="M 125 410 C 110 470, 100 520, 90 560 L 150 560 C 160 520, 175 460, 185 410 Z" fill="#1E0717"/>
    <path d="M 155 410 C 175 480, 210 560, 230 620 L 280 600 C 260 540, 215 460, 195 410 Z" fill="#1E0717"/>

    <!-- Bare Arms reaching dynamically upwards -->
    <path d="M 160 220 C 220 180, 280 140, 330 90 L 310 80 C 260 130, 200 170, 150 210 Z" fill="#E6735C"/>
    <path d="M 130 230 C 80 200, 30 180, -20 160 L -15 175 C 30 195, 80 220, 120 245 Z" fill="#E6735C"/>
  </g>

  <!-- Palm Silhouettes at the bottom edge -->
  <g fill="#170513" opacity="0.6">
    <path d="M 800 1000 Q 820 900 840 820 Q 845 820 848 900 L 860 1000 Z"/>
    <path d="M 840 820 C 780 780, 720 790, 680 820 C 730 810, 790 815, 840 820 Z"/>
    <path d="M 840 820 C 840 760, 870 720, 910 700 C 890 740, 870 780, 840 820 Z"/>
    <path d="M 840 820 C 890 800, 950 810, 990 840 C 940 830, 880 830, 840 820 Z"/>
  </g>
</svg>
`;

// 7. OG IMAGE (1200x630 JPG)
const ogImageSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgOg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F7893C"/>
      <stop offset="35%" stop-color="#F0603F"/>
      <stop offset="65%" stop-color="#A8366B"/>
      <stop offset="100%" stop-color="#1B0C22"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bgOg)"/>
  <circle cx="1000" cy="300" r="280" fill="#FFD3A1" opacity="0.6"/>

  <text x="100" y="160" font-family="'Jost', sans-serif" font-weight="600" font-size="22" fill="#FFD3A1" letter-spacing="0.3em">HELLO, I'M</text>
  <text x="95" y="290" font-family="'Bodoni Moda', serif" font-weight="700" font-size="110" fill="#F0505A" letter-spacing="0.05em">ARIANA</text>
  <text x="320" y="390" font-family="'Yellowtail', cursive" font-size="110" fill="#F9AE55">Vega</text>
  <text x="100" y="470" font-family="'Jost', sans-serif" font-weight="600" font-size="20" fill="#F8E6D6" letter-spacing="0.2em">UI/UX DESIGNER &amp; DIGITAL STORYTELLER</text>
  <text x="100" y="520" font-family="'Jost', sans-serif" font-size="18" fill="#F8E6D6" opacity="0.8">I craft digital experiences that are beautiful, intuitive and built to make a real impact.</text>
</svg>
`;

// 8. FAVICON SVG
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#1B0C22"/>
  <path d="M32 6 C32 20, 20 32, 6 32 C20 32, 32 44, 32 58 C32 44, 44 32, 58 32 C44 32, 32 20, 32 6 Z" fill="#F0505A"/>
  <circle cx="32" cy="32" r="3" fill="#FFD3A1"/>
</svg>
`;

// 9. ROBOTS.TXT
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://arianavega.design/sitemap-index.xml
`;

async function build() {
  console.log('Generating images with Sharp...');

  // 1. Hero Subject PNG
  await sharp(Buffer.from(heroSubjectSvg))
    .png()
    .toFile('src/assets/hero/hero-subject.png');
  console.log('Created hero-subject.png');

  // 2. About Portrait JPG
  await sharp(Buffer.from(aboutPortraitSvg))
    .jpeg({ quality: 90 })
    .toFile('src/assets/about/about-portrait.jpg');
  console.log('Created about-portrait.jpg');

  // 3. Quote Sky JPG
  await sharp(Buffer.from(quoteSkySvg))
    .jpeg({ quality: 90 })
    .toFile('src/assets/about/quote-sky.jpg');
  console.log('Created quote-sky.jpg');

  // 4. Wild Soul JPG
  await sharp(Buffer.from(wildSoulSvg))
    .jpeg({ quality: 90 })
    .toFile('src/assets/projects/wild-soul.jpg');
  console.log('Created wild-soul.jpg');

  // 5. Planta JPG
  await sharp(Buffer.from(plantaSvg))
    .jpeg({ quality: 90 })
    .toFile('src/assets/projects/planta.jpg');
  console.log('Created planta.jpg');

  // 6. Move Freely JPG
  await sharp(Buffer.from(moveFreelySvg))
    .jpeg({ quality: 90 })
    .toFile('src/assets/projects/move-freely.jpg');
  console.log('Created move-freely.jpg');

  // 7. OG JPG
  await sharp(Buffer.from(ogImageSvg))
    .jpeg({ quality: 85 })
    .toFile('public/og.jpg');
  console.log('Created og.jpg');

  // 8. Favicon
  fs.writeFileSync('public/favicon.svg', faviconSvg.trim());
  console.log('Created favicon.svg');

  // 9. Robots.txt
  fs.writeFileSync('public/robots.txt', robotsTxt.trim());
  console.log('Created robots.txt');

  console.log('All assets generated successfully!');
}

build().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
