import { useEffect, useState } from 'react';

export const GalaxyBackground = () => {
  const [circles, setCircles] = useState<Array<{ id: number; size: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const circleArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      left: Math.random() * 100,
      delay: Math.random() * 15
    }));
    setCircles(circleArray);
  }, []);

  return (
    <>
      <div className="galaxy-bg">
        <div className="stars" />
        <div className="floating-circles">
          {circles.map((circle) => (
            <div
              key={circle.id}
              className="circle"
              style={{
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                left: `${circle.left}%`,
                animationDelay: `${circle.delay}s`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};