import { motion } from "framer-motion";
type Props = {
  title: string;
};

const PrimaryButton = ({ title }: Props) => {
  return (
    <motion.button
      name={title}
      type="button"
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring" }}
      className="inline-flex items-center justify-center w-full px-8 py-3 button font-bold text-white bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      role="button"
    >
      {title}
    </motion.button>
  );
};

export default PrimaryButton;
