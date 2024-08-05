'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  title: string;
  content: string;
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({ title, content, delay = 0, duration = 1 }: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay }}
      className="text-center mt-16 mb-16 max-w-8xl mx-auto px-4"
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: duration * 0.8, delay: delay + 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="w-24 h-1 bg-blue-500 mx-auto mb-6"
        initial={{ width: 0 }}
        animate={isInView ? { width: 96 } : { width: 0 }}
        transition={{ duration: duration * 1.2, delay: delay + 0.4 }}
      />
      <motion.p
        className="text-2xl text-gray-600 leading-relaxed whitespace-pre-wrap"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: duration * 1.5, delay: delay + 0.6 }}
      >
        {content}
      </motion.p>
    </motion.section>
  );
};

export default AnimatedSection;
