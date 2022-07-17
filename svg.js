function createSvgElement(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

function createPolygon(points) {
  return {
    transpose: (mapper) => {
      let transposed = points.map(mapper);
      return createPolygon(transposed);
    },
    toSvgElement: (style) => {
      const el = createSvgElement("polygon");
      let strPoints = points.map((p) => `${p.x},${p.y}`);
      let pointsStr = strPoints.reduce((prev, curr) => prev + " " + curr, "");
      el.setAttribute("points", pointsStr);
      for (const prop in style) {
        el.setAttribute(prop, style[prop]);
      }
      return el;
    },
  };
}

function createPolyline(points) {
  return {
    transpose: (mapper) => {
      let transposed = points.map(mapper);
      return createPolyline(transposed);
    },
    toSvgElement: (style) => {
      const el = createSvgElement("polyline");
      let strPoints = points.map((p) => `${p.x},${p.y}`);
      let pointsStr = strPoints.reduce((prev, curr) => prev + " " + curr, "");
      el.setAttribute("points", pointsStr);
      for (const prop in style) {
        el.setAttribute(prop, style[prop]);
      }
      return el;
    },
  };
}

function createLine(startPoint, endPoint) {
    return {
      transpose: (mapper) => {
        return createLine(mapper(startPoint), mapper(endPoint));
      },
      toSvgElement: (style) => {
        const el = createSvgElement("line");
        el.setAttribute("x1", startPoint.x);
        el.setAttribute("y1", startPoint.y);
        el.setAttribute("x2", endPoint.x);
        el.setAttribute("y2", endPoint.y);
        for (const prop in style) {
          el.setAttribute(prop, style[prop]);
        }
        return el;
      },
    };
  }
  
function createMoveToCommand(point) {
  return {
    transpose: (mapper) => {
      return createMoveToCommand(mapper(point));
    },
    toString: () => {
        return `M${point.x} ${point.y}`;
    },
  };
}

function createCurveToCommand(cp1, cp2, ep) {
  return {
    transpose: (mapper) => {
      return createCurveToCommand(mapper(cp1), mapper(cp2), mapper(ep));
    },
    toString: () => {
      return `C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${ep.x} ${ep.y}`;
    },
  };
}

function createLineToCommand(point) {
  return {
    transpose: (mapper) => {
      return createLineToCommand(mapper(point));
    },
    toString: () => {
        return `L ${point.x} ${point.y}`;
    },
  };
}

function createCloseCommand() {
  return {
    transpose: (_) => {
      return createCloseCommand();
    },
    toString: () => {
      return `Z`;
    },
  };
}

function M(x, y) {
  return createMoveToCommand(createPoint(x, y));
}

function C(x1, y1, x2, y2, x3, y3) {
  return createCurveToCommand(
    createPoint(x1, y1),
    createPoint(x2, y2),
    createPoint(x3, y3));
}

function L(x, y) {
    return createLineToCommand(
      createPoint(x, y));
  }

function Z() {
  return createCloseCommand();
}

function createPath(...commands) {
  return {
    transpose: (mapper) => {
      let transposed = commands.map((c) => c.transpose(mapper));
      return createPath.apply(null, transposed);
    },
    toSvgElement: (style) => {
      const el = createSvgElement("path");
      let strs = commands.map((cmd) => cmd.toString());
      let d = strs.reduce((prev, curr) => prev + " " + curr, "");
      el.setAttribute("d", d);
      for (const prop in style) {
        el.setAttribute(prop, style[prop]);
      }
      return el;
    },
  };
}
