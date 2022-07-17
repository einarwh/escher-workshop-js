function createRendering() {
  let box = { 
    a: {x: 125, y: 75},
    b: {x: 250, y: 0},
    c: {x: 0, y: 250}
  };
  let fp = createPicture(fish);
  let picture = squareLimit(3, fp);
  return picture(box);
}
