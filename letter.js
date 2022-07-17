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

const letterE = (function() {
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
