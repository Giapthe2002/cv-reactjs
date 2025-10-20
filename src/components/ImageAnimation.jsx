import * as motion from "motion/react-client";

const ImageAnimation = ({ image }) => {
  const ball = {
    width: 120,
    height: 120,
    backgroundColor: "#5686F5",
    borderRadius: "50%",
    overflow: "hidden",
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={ball}
    >
      <img src={image} alt="Profile Image" className="object-cover scale-125" />
    </motion.div>
  );
};

export default ImageAnimation;
