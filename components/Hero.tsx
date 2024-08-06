'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <section className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="relative w-[263px] h-[263px] shadow-lg p-1 -mb-36">
          <Image src="/logo.png" alt="Petty's Paws Logo" fill style={{ objectFit: 'contain' }} priority />
        </div>
        <div className="relative w-[444px] h-[444px] mt-6">
          <Image src="/pettyspaws_black.png" alt="Petty's Paws Text" fill style={{ objectFit: 'contain' }} priority />
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-3xl -mt-24" // 添加了 -mt-20 来将 h1 移动到第二张图片的下半部分
      >
        {t('title')}
      </motion.h1>
    </section>
  );
};

export default Hero;
