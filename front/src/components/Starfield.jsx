import React, { useRef, useEffect } from 'react';

const StarfieldCanvas = ({ speed }) => {
  const canvasRef = useRef();
  const starsRef = useRef([]);

  const NUM_STARS = 250;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let frame = 0;

    const pastelColors = [
      '#FFCCCC',
      '#CCFFCC',
      '#CCCCFF',
      '#FFFFCC',
      '#FFCCFF',
      '#CCFFFF',
    ];

    const createStars = () => {
      starsRef.current = Array.from({ length: NUM_STARS }, () => ({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        color:
          pastelColors[
            Math.floor(Math.random() * pastelColors.length)
          ],
        twinkleOffset: Math.random() * 100,
      }));
    };

    const updateStars = () => {
      for (let star of starsRef.current) {
        star.z -= speed;

        // Simulate diagonal tilt
        star.x += 0.2 * speed;
        star.y += 0.1 * speed;

        if (
          star.z <= 1 ||
          star.x > width / 2 ||
          star.y > height / 2
        ) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }
      }
    };

    const drawStars = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      ctx.shadowBlur = 3; // subtle glow
      for (let star of starsRef.current) {
        const k = 128.0 / star.z;

        // ⬆️ Shift upward from center
        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2 - height * 0.15;

        if (x >= 0 && x < width && y >= 0 && y < height) {
          const size = (1 - star.z / width) * 4;
          const pixelSize = Math.max(1, Math.floor(size));

          // Reduced twinkle amplitude
          const twinkle =
            0.8 + 0.2 * Math.sin((frame + star.twinkleOffset) * 0.05);
          ctx.globalAlpha = twinkle;

          ctx.shadowColor = star.color;
          ctx.fillStyle = star.color;
          ctx.fillRect(x, y, pixelSize, pixelSize);
        }
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      frame++;
      updateStars();
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createStars();
    };

    window.addEventListener('resize', handleResize);
    createStars();
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
