import React, { useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  function func() {}

  useEffect(({ width, height }) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = { width };
    canvas.height = { height };
    ctx.strokeStyle = "#000000";
  }, []);

  const drawing = () => {};

  const stopDrawing = () => {};

  return (
    <canvas
      id="canvas"
      ref={canvas}
      onMouseDown={() => drawing}
      onMouseUp={() => stopDrawing}
    ></canvas>
  );
};

export default Canvas;

const canvasStyle = {
  border: "1px solid black",
};
