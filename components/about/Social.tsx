'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Social() {
  const t = useTranslations('social');
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
  };

  const socialMedias = [
    { src: '/抖音.webp', name: 'douyin', link: 'https://v.douyin.com/irJwr2PJ/ 7@3.com' },
    { src: '/微博.webp', name: 'Weibo', link: 'https://weibo.com/u/7915067178' },
    {
      src: '/小红书.webp',
      name: 'Xiaohongshu',
      link: 'https://www.xiaohongshu.com/user/profile/65ec73c3000000000500b29d?xhsshare=CopyLink&appuid=61631754000000000202416d&apptime=1722922612&share_id=8ef608132a6f4528871a32799ba534b5',
    },
    { src: '/微信.webp', name: 'WeChat', link: '#', isWeChat: true },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>
      <div className="w-full max-w-md space-y-4">
        {socialMedias.map((media, index) => (
          <motion.div
            className="flex items-center p-3"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            key={media.src}
          >
            <Image src={media.src} alt={`${media.name} Logo`} width={32} height={32} className="mr-4" />
            {media.isWeChat ? (
              <Dialog open={isWeChatOpen} onOpenChange={setIsWeChatOpen}>
                <DialogTrigger asChild>
                  <button className="text-base">pettyspaws贝蒂波斯 ({media.name})</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[300px]">
                  <DialogHeader>
                    <DialogTitle>Scan WeChat QR Code</DialogTitle>
                    <DialogDescription>Scan this QR code to follow pettyspaws贝蒂波斯 on WeChat</DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-center">
                    <Image src="/wechat_qr.jpg" alt="WeChat QR Code" width={200} height={200} />
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Link href={media.link} className="text-base" target="_blank" rel="noopener noreferrer">
                pettyspaws贝蒂波斯 ({media.name})
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
