import { motion } from "framer-motion";
import { ReactElement } from "react";

type Props = {
  title: string;
  description: string;
  icon: ReactElement<any, any>;
};
const FeatureCard = ({ title, description, icon }: Props) => {
  return (
    <motion.div
      whileHover={{
        zIndex: 10,
        backgroundColor: "rgb(94 234 212)",
      }}
      transition={{ type: "spring", bounce: 0.3 }}
      className="relative bg-teal-200 border-x-2 border-teal-400 group"
    >
      <div className="relative space-y-8 py-12 p-8">
        {icon}
        <div className="space-y-2">
          <h5 className="text-xl font-medium text-gray-700">{title}</h5>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
