const blank = (_) => {
  return [];
};

function turn(picture) {
  return (box) => {
    return picture(turnBox(box));
  };
}

function flip(picture) {
  return (box) => {
    return picture(flipBox(box));
  };
}

function toss(picture) {
  return (box) => {
    return picture(tossBox(box));
  };
}

function aboveRatio(m, n, p1, p2) {
  return (box) => {
    let f = m / (m + n);
    let [top, bot] = splitVertically(f, box);
    return p1(top).concat(p2(bot));
  };
}

function above(p1, p2) {
  return aboveRatio(1, 1, p1, p2);
}

function besideRatio(m, n, p1, p2) {
  return (box) => {
    let f = m / (m + n);
    let [left, right] = splitHorizontally(f, box);
    return p1(left).concat(p2(right));
  };
}

function beside(p1, p2) {
  return besideRatio(1, 1, p1, p2);
}

function quartet(nw, ne, sw, se) {
  return above(beside(nw, ne || nw), beside(sw || nw, se || nw));
}

function row(...ps) {
  let [h, ...t] = ps;
  if (t.length == 0) {
    return h;
  } else {
    return besideRatio(1, t.length, h, row.apply(this, t));
  }
}

function column(...ps) {
  let [h, ...t] = ps;
  if (t.length == 0) {
    return h;
  } else {
    return aboveRatio(1, t.length, h, column.apply(this, t));
  }
}

function nonet(nw, nm, ne, mw, mm, me, sw, sm, se) {
  return column(row(nw, nm, ne), row(mw, mm, me), row(sw, sm, se));
}

function over(p1, p2) {
  return (box) => {
    return p1(box).concat(p2(box));
  };
}

function ttile(p) {
  let pn = flip(toss(p));
  let pe = turn(turn(turn(pn)));
  return over(pe, over(pn, p));
}

function utile(p) {
  let pn = flip(toss(p));
  let pw = turn(pn);
  let ps = turn(pw);
  let pe = turn(ps);
  return over(pe, over(ps, over(pw, pn)));
}

function side(n, p) {
  if (n == 0) {
    return blank;
  } else {
    let s = side(n - 1, p);
    let t = ttile(p);
    return quartet(s, s, turn(t), t);
  }
}

function corner(n, p) {
  if (n == 0) {
    return blank;
  } else {
    let c = corner(n - 1, p);
    let s = side(n - 1, p);
    return quartet(c, s, turn(s), utile(p));
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
