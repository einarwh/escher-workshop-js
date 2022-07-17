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
