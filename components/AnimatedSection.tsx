'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface AnimatedSectionProps {
  title: string;
  content: string;
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({ title, content, delay = 0, duration = 1 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay: delay + 0.2,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: { width: 96, transition: { duration, delay: delay + 0.2 } },
  };

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="text-center mt-16 mb-16 max-w-8xl mx-auto px-4"
    >
      <motion.h1 variants={childVariants} className="text-4xl font-bold mb-6 text-gray-800">
        {title}
      </motion.h1>
      <motion.div variants={lineVariants} className="h-1 bg-blue-500 mx-auto mb-6" />
      <motion.p variants={childVariants} className="text-2xl text-gray-600 leading-relaxed whitespace-pre-wrap">
        {content}
      </motion.p>
    </motion.section>
  );
};

export default AnimatedSection;
