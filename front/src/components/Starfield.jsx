import React, { useRef, useEffect } from 'react';

const StarfieldCanvas = ({ speed }) => {
  const canvasRef = useRef();
  const objectsRef = useRef([]);

  const NUM_OBJECTS = 250;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let frame = 0;

    const emojis = ['🐣', '🥚', '🌷', '🐰', '🌼']; // Easter emojis

    const createObjects = () => {
      objectsRef.current = Array.from(
        { length: NUM_OBJECTS },
        () => ({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          twinkleOffset: Math.random() * 100,
        })
      );
    };

    const updateObjects = () => {
      for (let obj of objectsRef.current) {
        obj.z -= speed;

        // Simulate diagonal tilt
        obj.x += 0.2 * speed;
        obj.y += 0.1 * speed;

        if (obj.z <= 1 || obj.x > width / 2 || obj.y > height / 2) {
          obj.x = Math.random() * width - width / 2;
          obj.y = Math.random() * height - height / 2;
          obj.z = width;
        }
      }
    };

    const drawObjects = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      for (let obj of objectsRef.current) {
        const k = 128.0 / obj.z;

        // ⬆️ Shift upward from center
        const x = obj.x * k + width / 2;
        const y = obj.y * k + height / 2 - height * 0.15;

        if (x >= 0 && x < width && y >= 0 && y < height) {
          const size = (1 - obj.z / width) * 24; // Adjust size based on depth
          ctx.font = `${Math.max(12, size)}px Arial`; // Set font size

          // Adjust opacity based on depth (z value)
          const alpha = Math.max(0, Math.min(1, 1 - obj.z / width)); // Closer objects are more visible
          ctx.globalAlpha = alpha;

          ctx.fillText(obj.emoji, x, y); // Draw emoji
        }
      }

      ctx.globalAlpha = 1; // Reset global alpha
    };

    const animate = () => {
      frame++;
      updateObjects();
      drawObjects();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createObjects();
    };

    window.addEventListener('resize', handleResize);
    createObjects();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default StarfieldCanvas;
