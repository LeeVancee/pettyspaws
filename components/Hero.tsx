'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import BlurFade from './magicui/blur-fade'; // 确保 BlurFade 组件在正确的路径

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="flex flex-col items-center justify-center">
      <BlurFade duration={1} delay={0.2}>
        <div className="flex flex-col items-center justify-center">
          <div className=" shadow-lg  -mb-36 rounded-3xl">
            <Image src="/logo.png" alt="Petty's Paws Logo" width={210} height={210} className="rounded-3xl" priority />
          </div>
          <div className=" mt-6">
            <Image src="/pettyspaws_black.png" width={444} height={444} alt="Petty's Paws Text" priority />
          </div>
        </div>
      </BlurFade>
      <BlurFade duration={1} delay={0.5} yOffset={20}>
        <h1 className="text-3xl -mt-24">{t('title')}</h1>
      </BlurFade>
    </section>
  );
};

export default Hero;
