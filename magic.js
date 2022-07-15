function createMagicMapper(box) {
  let a = box.a;
  let b = box.b;
  let c = box.c;
  return (pt) => {
    return add(a, add(scale(pt.x, b), scale(pt.y, c)));
  };
}

function createPicture(shapes) {  
  return (box) => {
    let mapper = createMagicMapper(box);
    console.log(box);
    console.log(magnitude(box.b)); 
    let s = Math.max(magnitude(box.b), magnitude(box.c));

    let sw = Math.sqrt(s / 50.0);
    //let sw = s / 50.0;
    let style = {
      'stroke-width': sw,
      'stroke': 'black',
      'fill': 'none'
    };
    console.log(shapes);
    let styled = shapes.map((s) => {
      return { style: style, shape: s.transpose(mapper) };
    });
    console.log(styled);
    return styled;
  };
}
