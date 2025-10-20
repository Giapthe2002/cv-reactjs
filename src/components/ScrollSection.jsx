import { motion } from "framer-motion";

const ScrollSection = ({ children, delay }) => {
  const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });
  return (
    <motion.section
      variants={fadeInUp(delay)}
      initial="hidden"
      animate="visible"
      className="flex-1"
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;
