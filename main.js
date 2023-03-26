function createRendering() {
  let box = { 
    a: {x: 125, y: 75},
    b: {x: 250, y: 0},
    c: {x: 0, y: 250}
  };
  let picture = turn(createPicture(letterF));
  return picture(box);
}
