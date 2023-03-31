function createRendering() {
  let box = { 
    a: {x: 125, y: 75},
    b: {x: 250, y: 0},
    c: {x: 0, y: 250}
  };
  let g = createPicture(george);
  let f = createPicture(fish);

  let picture = quartet(tunnel(10, f));

  return picture(box);
}
