import React, { useRef, useState, useEffect } from "react";

//Canvas and Brush tool
const Canvas = () => {
  //setting the initial canvas as null
  //using useRef to prevent from constant re-rendering
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  //using useState for drawing state
  const [drawing, setDrawing] = useState(false);

  //setting the initial value for the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    //setting the width and the height of the canvas
    canvas.width = 500;
    canvas.height = 500;

    //setting the brush
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000000";
  }, []);

  //when onMouseDown, and starts drawing
  const isDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (!drawing) {
      ctxRef.current.beginPath();
      ctxRef.current.moveTo(mouseX, mouseY);
    }

    setDrawing(true);
  };

  //when onMouseUp, and stops drawing
  const stopDrawing = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  //when onMouseMove, and moves the mouse to draw
  const continueDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (!drawing) return;
    else {
      ctxRef.current.lineTo(mouseX, mouseY);
      ctxRef.current.stroke();
    }
  };

  const setToDrawing = () => {
    ctxRef.current.globalCompositeOperation = "source-over";
  };

  const setToErasing = () => {
    ctxRef.current.globalCompositeOperation = "destination-out";
  };

  return (
    <div>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseDown={isDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={continueDrawing}
        onMouseOut={stopDrawing}
        style={{ border: "1px solid black" }}
      ></canvas>
      <div>
        <button onClick={setToDrawing}>Draw</button>
        <button onClick={setToErasing}>Erase</button>
      </div>
    </div>
  );
};

export default Canvas;
