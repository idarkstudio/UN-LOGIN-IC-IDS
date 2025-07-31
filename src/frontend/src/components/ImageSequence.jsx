// src/components/ImageSequence.tsx
import React, { useEffect, useState } from "react";

const frameCount = 100;

function getFramePath(index) {
  const paddedIndex = index.toString().padStart(3, "0"); // '001', '002'...
  return `/frames/frame_${paddedIndex}.png`; // Si están en public/frames
}

const ImageSequence = () => {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev < frameCount ? prev + 1 : 1)); // Loop
    }, 33); // ~30fps

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={getFramePath(currentFrame)}
      alt={`Frame ${currentFrame}`}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default ImageSequence;
