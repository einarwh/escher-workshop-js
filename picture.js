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
