import React, { useRef, useState, useEffect } from "react";

//Canvas and Brush tool
const Canvas = () => {
  //setting the initial canvas as null
  //using useRef to prevent from constant re-rendering
  const canvasRef = useRef(null);

  //using useState for drawing state
  const [drawing, setDrawing] = useState(false);

  //setting the initial value for the canvas
  useEffect(({ width, height }) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    //setting the width and the height of the canvas
    canvas.width = { width };
    canvas.height = { height };

    //setting the brush
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";
  }, []);

  //when onMouseDown, and starts drawing
  const isDrawing = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);

    setDrawing(true);
  };

  //when onMouseUp, and stops drawing
  const stopDrawing = () => {
    setDrawing(false);
  };

  //when onMouseMove, and moves the mouse to draw
  const continueDrawing = (e) => {
    if (!drawing) return;

    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  };

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      onMouseDown={() => isDrawing}
      onMouseMove={() => continueDrawing}
      onMouseUp={() => stopDrawing}
      onMouseOut={() => stopDrawing}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

export default Canvas;
