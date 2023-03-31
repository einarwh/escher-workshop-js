const blank = (_) => {
  return [];
};

function turn(picture) {
  return box => {
    const turnedBox = {
      a: add(box.a, box.b),
      b: box.c,
      c: negate(box.b)
    }
    return picture(turnedBox);
  }
}

function flip(picture) {
  return box => {
    const flippedBox = {
      a: add(box.a, box.b),
      b: negate(box.b),
      c: box.c
    }
    return picture(flippedBox);
  }
}

function toss(picture) {
  return box => {
    const tossedBox = {
      a: add(box.a, scale(0.5, add(box.b, box.c))),
      b: scale(0.5, add(box.b, box.c)),
      c: scale(0.5, subtract(box.c, box.b)) 
    }
    return picture(tossedBox);
  }
}

function aboveRatio(m, n, p1, p2) {
  function moveBox(f, box) {
    return {
      a: add(box.a, scale(f, box.c)),
      b: box.b, 
      c: box.c
    }
  }
  function scaleBox(f, box) {
    return {
      a: box.a,
      b: box.b,
      c: scale(f, box.c)
    }
  }
  return box => {
    const topFraction = m / (m + n);
    const botFraction = 1 - topFraction;
    const botBox = scaleBox(botFraction, box);
    const topBox = scaleBox(topFraction, moveBox(botFraction, box));
    return p1(topBox).concat(p2(botBox));
  }
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
    }
  }
  function scaleBox(f, box) {
    return {
      a: box.a,
      b: scale(f, box.b),
      c: box.c
    }
  }
  return box => {
    const leftFraction = m / (m+n);
    const rightFraction = 1 - leftFraction;
    const leftBox = scaleBox(leftFraction, box);
    const rightBox = scaleBox(rightFraction, moveBox(leftFraction, box));
    return p1(leftBox).concat(p2(rightBox));
  }
}

function beside(p1, p2) {
  return besideRatio(1, 1, p1, p2);
}

function quartet(nw, ne=nw, sw=nw, se=nw) {
  return above(beside(nw, ne), beside(sw, se));
}

function nonet(nw, nm, ne, mw, mm, me, sw, sm, se) {
  function row(w, m, e) {
    return besideRatio(1, 2, w, beside(m, e));
  }
  function col(n, m, s) {
    return aboveRatio(1, 2, n, above(m, s));
  }
  return col(row(nw, nm, ne), row(mw, mm, me), row(sw, sm, se));
}

function zoom(depth, nw, nm, ne, mw, mm, me, sw, sm, se) {
  function fn(n) {
    return n > 0 ? nonet(nw, nm, ne, mw, fn(n-1), me, sw, sm, se) : mm;
  }
  return fn(depth);
}

function over(p1, p2) {
  return box => {
    return p1(box).concat(p2(box));
  }
}

function ttile(p) {
  const pn = flip(toss(p));
  const pe = turn(turn(turn(pn)));
  return over(p, over(pn, pe));
}

function utile(p) {
  const pn = flip(toss(p));
  const pw = turn(pn);
  const ps = turn(pw);
  const pe = turn(ps);
  return over(pn, over(pw, over(ps, pe)));
}

function side(n, p) {
  if (n > 0) {
    let s = side(n-1, p);
    let t = ttile(p);
    return quartet(s, s, turn(t), t);
  } else {
    return blank;
  }
}

function corner(n, p) {
  if (n > 0) {
    let u = utile(p);
    let s = side(n-1, p);
    let c = corner(n-1, p);
    return quartet(c, s, turn(s), u);
  }
  else {
    return blank;
  }
}

function limit(n, p) {
  let nm = side(n, p);
  let mw = turn(nm);
  let sm = turn(mw);
  let me = turn(sm);
  let nw = corner(n, p);
  let sw = turn(nw);
  let se = turn(sw);
  let ne = turn(se);
  let mm = utile(p);
  return nonet(nw, nm, ne, mw, mm, me, sw, sm, se);
}

function nrut(p) { return turn(turn(turn(p))); }

function tunnel(n, p) {
  function tile(n, p) {
    if (n > 0) {
      let o = over(p, turn(turn(p)));
      let t = nrut(ttile(p));
      let r = tile(n-1, p);
      return quartet(o, t, t, r);
    }
    else {
      return blank;
    }
  }
  let nw = tile(n, p);
  let sw = turn(nw);
  let se = turn(sw);
  let ne = turn(se);
  return quartet(nw, ne, sw, se); 
}
