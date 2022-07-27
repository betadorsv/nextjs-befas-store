import React, { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/dist/client/image";
import Layout from "../components/Layout";
import RhetoricianModel from "../components/RhetoricianModel";
import ScrollArrow from "../assets/ScrollArrow.svg";
import Project from "../components/Project";
import QrCode from "../assets/Qrcode_befas.svg";
import QrCodeBefas from "../assets/qrcode.png";
import SocialTray from "../components/SocialTray";
import Loader from "../components/Loader";
import DigitalCard from "../components/DigitalCard";
import WorkPage from "./work/index";
const Index = () => {
  const [Loading, setLoading] = useState(false);
  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      x: 0,
      y: -100,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const itemLeft = {
    hidden: { opacity: 0, x: "-100%" },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2,
      },
    },
    exit: { opacity: 0, x: "-100%" },
  };
  const itemRight = {
    hidden: { opacity: 0, x: "100%" },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2,
      },
    },
    exit: { opacity: 0, x: "100%" },
  };
  const itemBottom = {
    hidden: { opacity: 0, y: 200, x: "-50%" },
    enter: {
      opacity: 1,
      x: "-50%",
      y: 0,
      transition: {
        staggerChildren: 0.5,
        ease: "easeInOut",
        duration: 2,
      },
    },
    exit: { opacity: 0, y: 200, x: "-50%" },
  };

  const controls = useAnimation();
  useEffect(() => {
    if (!Loading) {
      controls.start("enter");
    } else {
      controls.start("hidden");
    }
  }, [Loading, controls]);
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={false}>
        {Loading ? <Loader /> : null}
      </AnimatePresence>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        exit="exit"
        className="w-full"
      >
        {/* landing hero */}
        <section data-scroll-section>
          <div className="relative w-full lg:grid-cols-8 bg-dark text-light h-screen grid grid-cols-6 lg:gap-6 antialiased">
            <motion.div
              variants={itemLeft}
              className="z-10 hero_text leading lg:grid-cols-8 md:text-left text-center space-y-4 col-span-full lg:col-start-2 flex flex-col items-center justify-center lg:col-end-6 lg:h-screen h-full"
            >
              <div className="md:text-5xl text-3xl font-bold uppercase">
                Local Brand{" "}
                <span className="md:text-7xl text-5xl text-stroke">BEFAS</span>{" "}
                <span className="md:text-7xl text-5xl text-stroke">Unisex</span>{" "}
                Since 2022
              </div>
              {/* <div className="inline-block">
                I am a{" "}
                <span
                  className="inline-block text-center"
                  style={{ width: "76px", minWidth: "76px" }}
                >
                  <Typewriter
                    options={{
                      strings: ["freelancer", "developer", "designer"],
                      autoStart: true,
                      loop: true,
                      cursor: ""
                    }}
                  />
                </span>{" "}
                who is fascinated by technologies and passionate about creating
                innovative products with beautiful and engaging design.
              </div> */}
            </motion.div>
            <motion.div
              variants={itemRight}
              className="absolute h-screen overflow-hidden lg:90 top-50 lg:top-0 w-90 lg:w-6/12 col-span-full lg:right-12 h-90"
            >
              <RhetoricianModel setLoading={setLoading} />
            </motion.div>
            <motion.div
              variants={itemBottom}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-flex flex-col space-y-1 items-center justify-end  h-12"
            >
              <p className="text-sm font-medium tracking-widest leading-snug text-center text-gray-100 uppercase">
                Coming Soon
              </p>
              <ScrollArrow />
            </motion.div>
          </div>
        </section>
        {/* <WorkPage isComponent={true} /> */}
        <section data-scroll-section className="relative">
          {/* <div className="container p-12 px-0 flex items-center justify-center md:justify-start text-2xl font-medium tracking-widest leading-tight text-light uppercase antialiased">
            recents
          </div> */}
          <div>
            <div>
              <Marquee gradient={true} gradientColor={[11, 11, 11]}>
                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="3"
                  className="text-stroke text-4xl md:text-6xl font-bold tracking-widest uppercase"
                >
                  <a
                    href="#"
                    // target="_blank"
                    className="cursor-pointer"
                    style={{ marginLeft: "2in" }}
                  >
                    Coming Soon
                  </a>
                  <a
                    href="#"
                    // target="_blank"
                    className="cursor-pointer"
                    style={{ marginLeft: "2in" }}
                  >
                    BEFAS
                  </a>
                </div>
              </Marquee>
            </div>
            <div>
              <Marquee
                gradient={true}
                gradientColor={[11, 11, 11]}
                direction="right"
              >
                <div
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-3"
                  className="text-4xl md:text-6xl h-full font-bold tracking-widest uppercase"
                >
                  <a
                    href="#"
                    // target="_blank"
                    className="cursor-pointer"
                    style={{ marginLeft: "2in" }}
                  >
                    Coming Soon
                  </a>
                  <a
                    href="#"
                    // target="_blank"
                    className="cursor-pointer"
                    style={{ marginLeft: "2in" }}
                  >
                    Befas
                  </a>
                </div>
              </Marquee>
            </div>
          </div>
          <div className="relative py-24 w-full place-items-center md:grid-cols-8 p-10 bg-dark text-light grid grid-cols-4 space-y-10  md:gap-6 antialiased">
            <div className="relative col-span-4 grid place-content-center">
              <div>
                <div className="CardHolder grid place-content-center">
                  <DigitalCard />
                  <Link href="/about">
                    <Image src={QrCodeBefas} height="300" width="300" />
                    {/* <QrCode /> */}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-4 grid place-content-center gap-6 text-xl text-center md:text-left ">
              <div>
                BEFAS ready to support to exchange products for you within 07
                days.{" "}
                {/* <span className="underline px-2">Hire me!</span> <br /> */}
                <br />
                You will get 5%,10%,15% discount for your next purchase.
                <br />
                CONNECT WITH BEFAS 
              </div>
              <SocialTray />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Index;
