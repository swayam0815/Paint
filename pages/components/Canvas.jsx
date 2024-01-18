import React, { useRef } from "react";

const Canvas = () => {
  const canvas = useRef(null);

  return <canvas id="canvas"></canvas>;
};

export default Canvas;
