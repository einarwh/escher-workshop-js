function createRendering() {
  let box = { 
    a: {x: 125, y: 75},
    b: {x: 250, y: 0},
    c: {x: 0, y: 250}
  };
  let h = createPicture(letterH);
  let e = createPicture(letterE);
  let n = createPicture(letterN);
  let d = createPicture(letterD);
  let r = createPicture(letterR);
  let s = createPicture(letterS);
  let o = createPicture(letterO);
  let picture = nonet(h, e, n, d, e, r, s, o, n);
  return picture(box);
}
