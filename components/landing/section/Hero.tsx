import { motion } from "framer-motion";
import PrimaryButton from "../../buttons/primary";
import SecondaryButton from "../../buttons/secondary";
const Hero = () => {
  const titleLine = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        bounce: 0.2,
        type: "spring",
        duration: 1.3,
      },
    },
  };
  return (
    <div className="px-2 sm:px-6 lg:px-8">
      <div className="text-center">
        <motion.h4
          initial="hidden"
          animate="visible"
          variants={titleLine}
          className="miniTitle text-gray-600"
        >
          Qwick API makes things easy
        </motion.h4>
        <h2 className="mt-5 title font-bold leading-tight text-gray-900">
          Turn your ideas into profitable
          <span className="relative inline">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-red-400 blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
            <span className="relative"> business</span>
          </span>
        </h2>

        <div className="sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
          <PrimaryButton title="Get Api Key" />
          <SecondaryButton title="Read Documentation" />
        </div>

        <p className="mt-8 text-base text-gray-500">
          Sign up now and get free 1000 credit of our API.
        </p>
      </div>
    </div>
  );
};

export default Hero;
