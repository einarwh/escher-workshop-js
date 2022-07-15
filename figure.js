function createPoint(x, y) {
  return { x: x, y: y };
}

function george() {
  let pts1 = [
    createPoint(0.0, 0.55),
    createPoint(0.15, 0.45),
    createPoint(0.3, 0.55),
    createPoint(0.4, 0.5),
    createPoint(0.2, 0.0),
  ];

  let pts2 = [
    createPoint(0.0, 0.8),
    createPoint(0.15, 0.6),
    createPoint(0.3, 0.65),
    createPoint(0.4, 0.65),
    createPoint(0.35, 0.8),
    createPoint(0.4, 1.0),
  ];

  let pts3 = [
    createPoint(0.6, 1.0),
    createPoint(0.65, 0.8),
    createPoint(0.6, 0.65),
    createPoint(0.8, 0.65),
    createPoint(1.0, 0.45),
  ];

  let pts4 = [
    createPoint(1.0, 0.2),
    createPoint(0.6, 0.5),
    createPoint(0.8, 0.0),
  ];

  let pts5 = [
    createPoint(0.4, 0.0),
    createPoint(0.5, 0.3),
    createPoint(0.6, 0.0),
  ];

  let all = [pts1, pts2, pts3, pts4, pts5];

  return all.map(createPolyline);
}
