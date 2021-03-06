function createPoint(x, y) {
  return { x: x, y: y };
}

const letterF = (function () {
  let points = [
    createPoint(0.3, 0.2),
    createPoint(0.4, 0.2),
    createPoint(0.4, 0.45),
    createPoint(0.6, 0.45),
    createPoint(0.6, 0.55),
    createPoint(0.4, 0.55),
    createPoint(0.4, 0.7),
    createPoint(0.7, 0.7),
    createPoint(0.7, 0.8),
    createPoint(0.3, 0.8),
  ];
  return [createPolygon(points)];
})();

const letterH = (function () {
  let points = [
    createPoint(0.3, 0.2),
    createPoint(0.4, 0.2),
    createPoint(0.4, 0.45),
    createPoint(0.6, 0.45),
    createPoint(0.6, 0.2),
    createPoint(0.7, 0.2),
    createPoint(0.7, 0.8),
    createPoint(0.6, 0.8),
    createPoint(0.6, 0.55),
    createPoint(0.4, 0.55),
    createPoint(0.4, 0.8),
    createPoint(0.3, 0.8),
  ];
  return [createPolygon(points)];
})();

const letterE = (function () {
  let points = [
    createPoint(0.3, 0.2),
    createPoint(0.7, 0.2),
    createPoint(0.7, 0.3),
    createPoint(0.4, 0.3),
    createPoint(0.4, 0.45),
    createPoint(0.6, 0.45),
    createPoint(0.6, 0.55),
    createPoint(0.4, 0.55),
    createPoint(0.4, 0.7),
    createPoint(0.7, 0.7),
    createPoint(0.7, 0.8),
    createPoint(0.3, 0.8),
  ];
  return [createPolygon(points)];
})();

const letterN = (function () {
  let points = [
    createPoint(0.3, 0.2),
    createPoint(0.4, 0.2),
    createPoint(0.4, 0.6),
    createPoint(0.6, 0.2),
    createPoint(0.7, 0.2),
    createPoint(0.7, 0.8),
    createPoint(0.6, 0.8),
    createPoint(0.6, 0.4),
    createPoint(0.4, 0.8),
    createPoint(0.3, 0.8),
  ];
  return [createPolygon(points)];
})();

const letterD = (function () {
  let pts1 = [
    createPoint(0.3, 0.2),
    createPoint(0.55, 0.2),
    createPoint(0.7, 0.35),
    createPoint(0.7, 0.65),
    createPoint(0.55, 0.8),
    createPoint(0.3, 0.8),
  ];
  let pts2 = [
    createPoint(0.4, 0.3),
    createPoint(0.52, 0.3),
    createPoint(0.6, 0.38),
    createPoint(0.6, 0.62),
    createPoint(0.52, 0.7),
    createPoint(0.4, 0.7),
  ];
  let all = [pts1, pts2];
  return all.map(createPolygon);
})();

const letterR = (function () {
  let pts1 = [
    createPoint(0.3, 0.2),
    createPoint(0.4, 0.2),
    createPoint(0.4, 0.45),
    createPoint(0.45, 0.45),
    createPoint(0.6, 0.2),
    createPoint(0.7, 0.2),
    createPoint(0.55, 0.45),
    createPoint(0.7, 0.45),
    createPoint(0.7, 0.8),
    createPoint(0.3, 0.8),
  ];
  let pts2 = [
    createPoint(0.4, 0.55),
    createPoint(0.6, 0.55),
    createPoint(0.6, 0.7),
    createPoint(0.4, 0.7),
  ];
  let all = [pts1, pts2];
  return all.map(createPolygon);
})();

const letterS = (function () {
  let points = [
    createPoint(0.3, 0.2),
    createPoint(0.7, 0.2),
    createPoint(0.7, 0.55),
    createPoint(0.4, 0.55),
    createPoint(0.4, 0.7),
    createPoint(0.7, 0.7),
    createPoint(0.7, 0.8),
    createPoint(0.3, 0.8),
    createPoint(0.3, 0.45),
    createPoint(0.6, 0.45),
    createPoint(0.6, 0.3),
    createPoint(0.3, 0.3),
  ];
  return [createPolygon(points)];
})();

const letterO = (function () {
  let pts1 = [
    createPoint(0.3, 0.2),
    createPoint(0.7, 0.2),
    createPoint(0.7, 0.8),
    createPoint(0.3, 0.8),
  ];
  let pts2 = [
    createPoint(0.4, 0.3),
    createPoint(0.6, 0.3),
    createPoint(0.6, 0.7),
    createPoint(0.4, 0.7),
  ];
  let all = [pts1, pts2];
  return all.map(createPolygon);
})();

const george = (function () {
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
})();

const fish = (function () {
  let paths = [
    // spine
    createPath(M(0.116, 0.702), C(0.26, 0.295, 0.33, 0.258, 0.815, 0.078)),
    // left fin outline
    createPath(
      M(0.25, 0.25),
      C(0.175, 0.175, 0.11, 0.11, 0.0, 0.0),
      C(-0.09, 0.09, -0.15, 0.15, -0.25, 0.25),
      C(-0.194, 0.372, -0.132, 0.452, -0.032, 0.564)
    ),
    // main body
    createPath(
      M(0.0, 1.0),
      C(0.104, 0.938, 0.163, 0.893, 0.234, 0.798),
      C(0.368, 0.65, 0.232, 0.54, 0.377, 0.377),
      C(0.4, 0.35, 0.45, 0.3, 0.5, 0.25),
      C(0.589, 0.217, 0.66, 0.208, 0.766, 0.202),
      C(0.837, 0.107, 0.896, 0.062, 1.0, 0.0),
      C(0.834, 0.042, 0.73, 0.056, 0.564, 0.032),
      C(0.452, 0.132, 0.372, 0.194, 0.25, 0.25),
      C(0.08, 0.33, 0.055, 0.355, -0.032, 0.564),
      C(-0.056, 0.73, -0.042, 0.834, 0.0, 1.0),
      Z()
    ),
    // right fin outline
    createPath(
      M(0.234, 0.798),
      C(0.34, 0.792, 0.411, 0.783, 0.5, 0.75),
      C(0.5, 0.625, 0.5, 0.575, 0.5, 0.5),
      C(0.46, 0.46, 0.41, 0.41, 0.377, 0.377)
    ),
    // right fin detail
    createPath(M(0.315, 0.71), C(0.378, 0.732, 0.426, 0.726, 0.487, 0.692)),
    // right fin detail
    createPath(M(0.34, 0.605), C(0.4, 0.642, 0.435, 0.647, 0.489, 0.626)),
    // right fin detail
    createPath(M(0.348, 0.502), C(0.4, 0.564, 0.422, 0.568, 0.489, 0.563)),
    // under right fin
    createPath(M(0.451, 0.418), C(0.465, 0.4, 0.48, 0.385, 0.49, 0.381)),
    // under right fin
    createPath(M(0.421, 0.388), C(0.44, 0.35, 0.455, 0.335, 0.492, 0.325)),
    // left fin detail
    createPath(M(-0.17, 0.237), C(-0.125, 0.355, -0.065, 0.405, 0.002, 0.436)),
    // left fin detail
    createPath(M(-0.121, 0.188), C(-0.06, 0.3, -0.03, 0.33, 0.04, 0.375)),
    // left fin detail
    createPath(M(-0.058, 0.125), C(-0.01, 0.24, 0.03, 0.28, 0.1, 0.321)),
    // left fin detail
    createPath(M(-0.022, 0.063), C(0.06, 0.2, 0.1, 0.24, 0.16, 0.282)),
    // left eye
    createPath(
      M(0.053, 0.658),
      C(0.075, 0.677, 0.085, 0.687, 0.098, 0.7),
      C(0.092, 0.752, 0.085, 0.812, 0.053, 0.819),
      C(0.042, 0.76, 0.042, 0.71, 0.053, 0.658),
      Z()
    ),
    // right eye
    createPath(
      M(0.13, 0.718),
      C(0.15, 0.73, 0.175, 0.745, 0.187, 0.752),
      C(0.172, 0.78, 0.15, 0.805, 0.112, 0.845),
      C(0.11, 0.81, 0.11, 0.795, 0.13, 0.718),
      Z()
    ),
  ];

  return paths;
})();
