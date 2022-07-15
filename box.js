function turnBox(box) {
  return { a: add(box.a, box.b), b: box.c, c: negate(box.b) };
}

function flipBox(box) {
  return { a: add(box.a, box.b), b: negate(box.b), c: box.c };
}

function tossBox(box) {
  return {
    a: add(box.a, scale(0.5, add(box.b, box.c))),
    b: scale(0.5, add(box.b, box.c)),
    c: scale(0.5, subtract(box.c, box.b)),
  };
}

function moveVertically(f, box) {
  return {
    a: add(box.a, scale(f, box.c)),
    b: box.b,
    c: box.c,
  };
}

function moveHorizontally(f, box) {
  return {
    a: add(box.a, scale(f, box.b)),
    b: box.b,
    c: box.c,
  };
}

function scaleVertically(f, box) {
  return {
    a: box.a,
    b: box.b,
    c: scale(f, box.c),
  };
}

function scaleHorizontally(f, box) {
  return {
    a: box.a,
    b: scale(f, box.b),
    c: box.c,
  };
}

function splitVertically(f, box) {
  const g = 1.0 - f;
  const top = scaleVertically(f, moveVertically(g, box));
  const bot = scaleVertically(g, box);
  return [top, bot];
}

function splitHorizontally(f, box) {
  const g = 1.0 - f;
  const left = scaleHorizontally(f, box);
  const right = scaleHorizontally(g, moveHorizontally(f, box));
  return [left, right];
}
