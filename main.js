function createRendering() {
  let box = { 
    a: {x: 125, y: 75},
    b: {x: 250, y: 0},
    c: {x: 0, y: 250}
  };
  let nw = createPicture(george, true);
  let ne = turn(turn(flip(nw)));
  let sw = turn(turn(nw));
  let se = flip(nw);
  let picture = quartet(nw, ne, sw, se);
  return picture(box);
}
