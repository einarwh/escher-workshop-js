function add(v1, v2) {
  return { x: v1.x + v2.x, y: v1.y + v2.y };
}

function subtract(v1, v2) {
  return { x: v1.x - v2.x, y: v1.y - v2.y };
}

function negate(v) {
  return { x: -v.x, y: -v.y };
}

function scale(f, v) {
  return { x: f * v.x, y: f * v.y };
}

function magnitude(v) {
  const x = v.x;
  const y = v.x;
  return Math.sqrt(x * x + y * y);
}
