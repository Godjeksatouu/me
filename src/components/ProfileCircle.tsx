// src/components/ProfileCircle.tsx
import { motion, Variants } from "framer-motion";

interface ProfileCircleProps {
  itemVariants: Variants; // framer-motion variants type
  imageSrc: string; // image path
}

const ProfileCircle: React.FC<ProfileCircleProps> = ({ itemVariants, imageSrc }) => {
  return (
    <motion.div variants={itemVariants} className="mb-8 inline-block">
      <img
        src={imageSrc}
        alt="My Photo"
        className="w-24 h-24 rounded-full object-cover shadow-glow"
      />
    </motion.div>
  );
};

export default ProfileCircle;
