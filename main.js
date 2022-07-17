function createRendering() {
  let box = { 
    a: {x: 125, y: 75},
    b: {x: 250, y: 0},
    c: {x: 0, y: 250}
  };
  let f = createPicture(letterF);
  let picture = besideRatio(3, 5, f, flip(f));
  return picture(box);
}
