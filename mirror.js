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
