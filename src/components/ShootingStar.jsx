import { motion } from "framer-motion";
import { useMemo } from "react";

const generateStars = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 2,
  }));
};

const ShootingStars = ({ count = 10 }) => {
  // Generate stars once per `count` to avoid re-creating animations on every render
  const stars = useMemo(() => generateStars(count), [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{
            x: "-10vw",
            y: "-10vh",
            rotate: 135,
            opacity: 0,
          }}
          animate={{
            x: "110vw",
            y: "110vh",
            rotate: 135,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            position: "absolute",
            top: `${star.top}%`,
            left: 0,
            width: "2px",
            height: "120px",
            background: "linear-gradient(135deg, rgba(255,255,255,1), rgba(255,255,255,0))",
            borderRadius: "999px",
            filter: "blur(1px)",
            transformOrigin: "0 0",
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;
