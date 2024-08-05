'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import AnimatedSection from '../AnimatedSection';

export default function Concepts() {
  const t = useTranslations('concepts');

  // 动画配置

  return (
    <div>
      <AnimatedSection title={t('title')} content={t('description')} />
    </div>
  );
}
