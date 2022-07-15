function createSvg() {
  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svgElement.setAttribute("width", "600");
  svgElement.setAttribute("height", "600");

  let f = createPicture(fLetter());
  let h = createPicture(hLetter());
  let e = createPicture(eLetter());
  let n = createPicture(nLetter());
  let d = createPicture(dLetter());
  let r = createPicture(rLetter());
  let s = createPicture(sLetter());
  let o = createPicture(oLetter());
  let georgePict = createPicture(george());
  let fishPict = createPicture(fish());
  let box = { 
    a: {x: 100, y: 100},
    b: {x: 300, y: 0},
    c: {x: 0, y: 300}
  };
  let nw = georgePict;
  let ne = turn(turn(flip(nw)));
  let sw = turn(turn(nw));
  let se = flip(nw);
  let georgeIv = quartet(nw, ne, sw, se);
  let henderson = nonet(h, e, n, d, e, r, s, o, n);
  let rendering = squareLimit(3, fishPict)(box);

  let mirrored = mirrorShapes(600, rendering);
  let childElements = mirrored.map(r => r.shape.toSvgElement(r.style));
  for (let child of childElements) {
    svgElement.appendChild(child);
  }

  return svgElement;
}

document.body.appendChild(createSvg());
