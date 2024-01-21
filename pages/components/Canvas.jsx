import React, { useRef } from "react";

const Canvas = () => {
  const canvas = useRef(null);

  function func() {}

  return (
    <canvas
      id="canvas"
      ref={canvas}
      onMouseDown={() => func}
      onMouseUp={() => func}
      onMouseMove={() => func}
      onMouseLeave={() => func}
    ></canvas>
  );
};

export default Canvas;
