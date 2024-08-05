'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // 引入 motion 组件
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Social() {
  const t = useTranslations('social');

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // 初始状态，不透明度为0，Y轴偏移30px
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }), // 可视状态，逐个元素延迟显示
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      <div className="space-y-6">
        {['/抖音.webp', '/微博.webp', '/小红书.webp', '/微信.webp'].map((src, index) => (
          <motion.div
            className="flex items-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index} // 将索引作为延迟因子传递
            key={src}
          >
            <Image src={src} alt="Petty's Paws Logo" width={50} height={50} />
            <Link href={'#'} className="text-2xl ml-5">
              pettyspaws贝蒂波斯
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
