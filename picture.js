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

function besideRatio(m, n, p1, p2) {
  function moveBox(f, box) {
    return {
      a: add(box.a, scale(f, box.b)),
      b: box.b,
      c: box.c
    };
  }
  function scaleBox(f, box) {
    return {
      a: box.a,
      b: scale(f, box.b),
      c: box.c
    };
  }
  return (box) => {
    const f = m / (m + n);
    const g = 1 - f;
    const left = scaleBox(f, box);
    const right = scaleBox(g, moveBox(f, box));
    return p1(left).concat(p2(right));  
  };
}

function beside(p1, p2) {
  return besideRatio(1, 1, p1, p2);
}

function quartet(nw, ne, sw, se) {
  return above(beside(nw, ne || nw), beside(sw || nw, se || nw));
}

function nonet(nw, nm, ne, mw, mm, me, sw, sm, se) {
  let topRow = besideRatio(1, 2, nw, beside(nm, ne));
  let midRow = besideRatio(1, 2, mw, beside(mm, me));
  let botRow = besideRatio(1, 2, sw, beside(sm, se));
  return aboveRatio(1, 2, topRow, above(midRow, botRow));
}

function zoom(depth, nw, nm, ne, mw, mm, me, sw, sm, se) {
  function fn(n) {
    return n == 0 ? mm : nonet(nw, nm, ne, mw, fn(n - 1), me, sw, sm, se);
  }
  return fn(depth);
}

// function over(p1, p2) {
//   return (box) => {
//     p1(box).concat(p2(box));
//   }
// }

function over(...ps) {
  return (box) => {
    return ps.reduce((acc, p) => acc.concat(p(box)), []);
  }
}

function ttile(p) {
  const pn = flip(toss(p));
  const pe = turn(turn(turn(pn)));
  return over(p, pn, pe);
}

function utile(p) {
  const pn = flip(toss(p));
  const pw = turn(pn);
  const ps = turn(pw);
  const pe = turn(ps);
  return over(pn, pw, ps, pe);
}

function side(n, p) {
  if (n < 1) {
    return blank;
  }
  else {
    const s = side(n - 1, p);
    const t = ttile(p);
    return quartet(s, s, turn(t), t);
  }
}

function corner(n, p) {
  if (n < 1) {
    return blank;
  }
  else {
    const c = corner(n - 1, p);
    const s = side(n - 1, p);
    const u = utile(p);
    return quartet(c, s, turn(s), u);
  }
}

function squareLimit(n, p) {
  let nw = corner(n, p);
  let sw = turn(nw);
  let se = turn(sw);
  let ne = turn(se);
  let nm = side(n, p);
  let mw = turn(nm);
  let sm = turn(mw);
  let me = turn(sm);
  let mm = utile(p);
  return nonet(nw, nm, ne, mw, mm, me, sw, sm, se);
}
