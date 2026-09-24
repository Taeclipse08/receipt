// RECEIPT
// Space-themed black hole sketch

import JsBarcode from "jsbarcode";

export const receipt = {
  height: 1080,
  seed: 67,
};

export function drawReceipt(p) {
  const { width: w, height: h } = p;

  p.background(248);

  p.randomSeed(receipt.seed);

  // Header
  p.noStroke();
  p.fill(0);
  p.textFont("monospace");
  p.textAlign(p.CENTER, p.TOP);
  p.textStyle(p.BOLD);
  p.textSize(28);
  p.text("ASTRO", w / 2, 28);

  p.textStyle(p.NORMAL);
  p.textSize(15);
  p.text("A TINY UNIVERSE", w / 2, 64);

  // Divider
  p.stroke(0);
  p.strokeWeight(1);
  for (let x = 24; x < w - 24; x += 10) {
    p.line(x, 100, x + 5, 100);
  }

  // Stars
  p.noStroke();
  for (let i = 0; i < 170; i++) {
    const x = p.random(25, w - 25);
    const y = p.random(125, 850);
    const s = p.random(1, 3);

    p.fill(0);
    p.circle(x, y, s);

    if (i % 17 === 0) {
      p.rect(x - 2, y, 4, 1);
      p.rect(x, y - 2, 1, 4);
    }
  }

  // Black hole outer ring
  p.noFill();
  p.stroke(0);
  p.strokeWeight(7);
  p.ellipse(w / 2, 500, 270, 105);

  p.strokeWeight(3);
  p.ellipse(w / 2, 500, 225, 75);

  // Accretion disk
  p.noStroke();
  p.fill(0);
  p.ellipse(w / 2, 500, 185, 55);

  // Black hole
  p.fill(0);
  p.circle(w / 2, 500, 120);

  // Tiny white highlight
  p.fill(248);
  p.circle(w / 2 - 22, 480, 5);

  // Orbiting planet
  p.noFill();
  p.stroke(0);
  p.strokeWeight(2);
  p.ellipse(w / 2, 500, 330, 155);

  p.noStroke();
  p.fill(0);

  const angle = p.PI * 0.18;
  const planetX = w / 2 + p.cos(angle) * 165;
  const planetY = 500 + p.sin(angle) * 77;

  p.circle(planetX, planetY, 16);

  // Caption
  p.textAlign(p.CENTER);
  p.textStyle(p.BOLD);
  p.textSize(18);
  p.text("SOMEWHERE IN THE UNIVERSE", w / 2, 665);

  p.textStyle(p.NORMAL);
  p.textSize(14);
  p.text("there is always another star", w / 2, 695);

  // Little constellation
  p.stroke(0);
  p.strokeWeight(1);

  const stars = [
    [90, 760],
    [145, 735],
    [205, 775],
    [270, 730],
    [325, 770],
  ];

  for (let i = 0; i < stars.length - 1; i++) {
    p.line(
      stars[i][0],
      stars[i][1],
      stars[i + 1][0],
      stars[i + 1][1]
    );
  }

  p.noStroke();
  for (const [x, y] of stars) {
    p.circle(x, y, 7);
  }

  // Footer
  p.textAlign(p.CENTER);
  p.textStyle(p.BOLD);
  p.textSize(16);
  p.text("KEEP LOOKING UP", w / 2, 875);

  p.textStyle(p.NORMAL);
  p.textSize(12);
  p.text("✦ ASTRO / 2026 ✦", w / 2, 900);

  // Bottom divider
  p.stroke(0);
  for (let x = 24; x < w - 24; x += 10) {
    p.line(x, 945, x + 5, 945);
  }

  p.noStroke();
  p.textSize(11);
  p.text("A LITTLE PIECE OF SPACE", w / 2, 970);
}
