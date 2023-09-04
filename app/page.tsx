import { Metadata } from 'next';

import { NICKNAME } from '@/constants';
import { cn } from '@/utils';

export const revalidate = 60;

export const metadata: Metadata = {
  description: `${NICKNAME}，一个正在努力的程序员。`,
  keywords: 'F西的个人站、F西、aifuxi',
};

export default async function HomePage() {
  return (
    <div className="max-w-[1400px] mx-auto flex flex-col h-[calc(100vh-80px)] justify-center items-center">
      <img
        src="/images/nyan-cat.gif"
        alt="Nyan Cat"
        className={cn('w-full h-auto')}
      />
      <div className="flex">
        <h1
          className={cn(
            'flex font-semibold overflow-hidden whitespace-nowrap animate-typing',
            'text-xl sm:text-4xl 2xl:text-5xl',
          )}
        >
          F西，努力做一个更好的程序员。
        </h1>
        <span
          className={cn(
            'ml-2 w-2 h-full animate-blink',
            'bg-gray-900 dark:bg-white',
          )}
        />
      </div>
    </div>
  );
}
