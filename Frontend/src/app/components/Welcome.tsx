"use client";
import React, { useState } from "react";
import { motion, scale } from "motion/react";
import { ArrowRight, Bike, ShoppingBasket } from "lucide-react";

type propsTypes = {
  nextStep: (s: number) => void;
};

const Welcome = ({ nextStep }: propsTypes) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="flex items-center gap-3"
      >
        <ShoppingBasket className="w-10 h-10 text-green-600" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
          Snapcart
        </h1>
      </motion.div>
      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="mt-4 text-gray-700 text-lg md:text-xl max-w-lg"
      >
        Your one-stop destination for fresh groceries, organic produce, and
        daily essentials delivery righ to your doorstep.
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
        }}
        className="flex items-center justify-center gap-10 "
      >
        <ShoppingBasket className="w-24 h-24 md:w-32 md:h-32 text-green-600 drop-shadow-md" />
        <Bike className="w-24 h-24 md:w-32 md:h-32 text-orange-600 drop-shadow-md" />
      </motion.div>
      <motion.button
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
        className=" inline-flex gap-2 bg-green-600 hover:bg-green-700 py-2 px-8 rounded-xl text-white mt-10 "
        onClick={() => nextStep(2)}
      >
        Next <ArrowRight></ArrowRight>
      </motion.button>
    </div>
  );
};

export default Welcome;
