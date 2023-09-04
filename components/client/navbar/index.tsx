'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { NavItem } from '@/types';
import { cn } from '@/utils';

const baseNavItems: NavItem[] = [
  {
    label: '首页',
    link: '/',
  },
  {
    label: '文章',
    link: '/articles',
  },
  {
    label: '标签',
    link: '/tags',
  },
  {
    label: '关于',
    link: '/about',
  },
];

export default function Navbar() {
  return (
    <div
      className={cn(
        'sticky top-0 h-[80px] border-b flex justify-center items-center',
      )}
    >
      <nav className="max-w-[1400px] w-full">
        <div className="flex justify-between h-[40px] border-1">
          <h2 className="flex items-center font-bold text-lg">AIFUXI</h2>
          <div className={'flex gap-8'}>
            {baseNavItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className={'flex items-center text-lg font-semibold relative'}
              >
                <motion.div
                  className="bg-black/0 absolute inset-0"
                  initial={{ transform: 'scale(-1)' }}
                  whileHover={{
                    backgroundColor: 'rgb(0 0 0 / 0.05)',
                    borderRadius: 8,
                    transform: 'scale(1)',
                  }}
                />
                <div className="py-1.5 px-4">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
