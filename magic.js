function createMirrorMapper(height) {
  return (pt) => {
    return { x: pt.x, y: height - pt.y };
  };
}

function mirrorShapes(height, styledShapes) {
  let mapper = createMirrorMapper(height);
  let mirroredShapes = styledShapes.map((s) => {
    return { style: s.style, shape: s.shape.transpose(mapper) };
  });
  return mirroredShapes;
}

function createMagicMapper(box) {
  let a = box.a;
  let b = box.b;
  let c = box.c;
  return (pt) => {
    return add(a, add(scale(pt.x, b), scale(pt.y, c)));
  };
}

function createBoxShapes(box, simple) {
  function getArrowStyle(id, color) {
    return {
      'stroke-width': '1',
      'stroke': color,
      'fill': 'none',
      'marker-end': `url(#${id})`
    };
  }
  function getDottedStyle() {
    return {
      'stroke-width': '1',
      'stroke-dasharray': '2',
      'stroke': 'grey',
      'fill': 'none'
    };
  }
  const a = box.a;
  const b = box.b;
  const c = box.c;
  let origin = {x: 0, y: 0};
  let bottomLeft = a;
  let bottomRight = add(a, b);
  let topLeft = add(a, c);
  let topRight = add(bottomRight, c);
  const aLine = createLine(origin, bottomLeft);
  const bLine = createLine(bottomLeft, bottomRight);
  const cLine = createLine(bottomLeft, topLeft);
  const dLine = createLine(topLeft, topRight);
  const eLine = createLine(bottomRight, topRight);
  if (simple) {
    const bStyled = { style: getDottedStyle(), shape: bLine };
    const cStyled = { style: getDottedStyle(), shape: cLine };
    const dStyled = { style: getDottedStyle(), shape: dLine };
    const eStyled = { style: getDottedStyle(), shape: eLine };
    return [ bStyled, cStyled, dStyled, eStyled ];  
  }
  else {
    const aStyled = { style: getArrowStyle('a-arrow', 'red'), shape: aLine };
    const bStyled = { style: getArrowStyle('b-arrow', 'orange'), shape: bLine };
    const cStyled = { style: getArrowStyle('c-arrow', 'purple'), shape: cLine };
    const dStyled = { style: getDottedStyle(), shape: dLine };
    const eStyled = { style: getDottedStyle(), shape: eLine };
    return [ aStyled, bStyled, cStyled, dStyled, eStyled ];  
  }
}

function createPicture(shapes, drawBox = false, simple = false) {  
  return (box) => {
    let mapper = createMagicMapper(box);
    let s = Math.max(magnitude(box.b), magnitude(box.c));
    let sw = Math.sqrt(s / 50.0);
    let style = {
      'stroke-width': sw,
      'stroke': 'black',
      'fill': 'none'
    };
    let styled = shapes.map((s) => {
      return { style: style, shape: s.transpose(mapper) };
    });
    boxShapes = drawBox ? createBoxShapes(box, simple) : [];
    return styled.concat(boxShapes);
  };
}
