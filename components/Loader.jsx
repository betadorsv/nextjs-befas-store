import React from "react";
import { motion } from "framer-motion";
import Image from "next/dist/client/image";
import Logo from "../assets/logo_only_w.png";

const Loader = () => {
  return (
    <motion.div
      style={{ zIndex: 100 }}
      className="fixed bg-dark grid place-content-center w-full h-screen top-0 left-0"
    >
      <motion.svg
        layoutId="loader"
        transition={{ duration: 1 }}
        className="loading"
        id="brand"
        width="129"
        height="21"
        viewBox="0 0 129 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <Image src={Logo} /> */}
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
