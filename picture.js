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
