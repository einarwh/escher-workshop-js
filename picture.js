const blank = (_) => {
  return [];
};

function turn(picture) {
  return (box) => {
    const turnedBox = {
      a: add(box.a, box.b),
      b: box.c,
      c: negate(box.b)
    };
    return picture(turnedBox); 
  };
}

function flip(picture) {
  return (box) => {
    const flippedBox = {
      a: add(box.a, box.b),
      b: negate(box.b),
      c: box.c
    };
    return picture(flippedBox); 
  };
}

function toss(picture) {
  return (box) => {
    const tossedBox = {
      a: add(box.a, add(scale(0.5, box.b), scale(0.5, box.c))),
      b: add(scale(0.5, box.b), scale(0.5, box.c)),
      c: subtract(scale(0.5, box.c), scale(0.5, box.b))
    };
    return picture(tossedBox); 
  };
}

function aboveRatio(m, n, p1, p2) {
  function moveBox(f, box) {
    return {
      a: add(box.a, scale(f, box.c)),
      b: box.b,
      c: box.c
    };
  }
  function scaleBox(f, box) {
    return {
      a: box.a,
      b: box.b,
      c: scale(f, box.c)
    };
  }
  return (box) => {
    const f = m / (m + n);
    const g = 1 - f;
    const top = scaleBox(f, moveBox(g, box));
    const bot = scaleBox(g, box);
    return p1(top).concat(p2(bot));  
  };
}

function above(p1, p2) {
  return aboveRatio(1, 1, p1, p2);
}
