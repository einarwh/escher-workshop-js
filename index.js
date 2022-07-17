function createArrowDef(id, color) {
  let attrs = {
    'id': id,
    'markerWidth': '10',
    'markerHeight': '10',
    'refX': '9',
    'refY': '3',
    'orient': 'auto',
    'markerUnits': 'strokeWidth'
  };
  const arrowElement = createSvgElement("marker");
  for (const prop in attrs) {
    arrowElement.setAttribute(prop, attrs[prop]);
  }

  const path = createPath(
    M(0, 0),
    L(0, 6),
    L(9, 3),
    Z());

  const pathElement = path.toSvgElement({ 
    'stroke': color, 
    'stroke-width': 1, 
    'fill': color });

  arrowElement.appendChild(pathElement);

  return arrowElement;
}

function createSvg() {
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  const width = 500;
  const height = 500;

  svgElement.setAttribute("width", width);
  svgElement.setAttribute("height", height);

  const defsElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "defs"
  );

  defsElement.appendChild(createArrowDef("a-arrow", "red"));
  defsElement.appendChild(createArrowDef("b-arrow", "orange"));
  defsElement.appendChild(createArrowDef("c-arrow", "purple"));

  svgElement.appendChild(defsElement);

  let rendering = createRendering();
  let mirrored = mirrorShapes(height, rendering);
  let childElements = mirrored.map(r => r.shape.toSvgElement(r.style));
  for (let child of childElements) {
    svgElement.appendChild(child);
  }

  return svgElement;
}

document.body.appendChild(createSvg());
