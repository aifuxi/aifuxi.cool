import Link from 'next/link';

import { WEBSITE } from '@/constants';
import { cn } from '@/utils';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <button
        className={cn(
          'relative flex h-14 w-14 flex-col items-center justify-center',
          'rounded-full bg-white text-3xl font-black',
          'after:animate-spin-slow after:absolute after:inset-0 after:rounded-full ',
          'after:border-2 after:border-l-green-400 after:border-r-red-400 after:border-t-blue-400 after:border-b-amber-400',
          'focus:outline-none focus:border-none', // 解决点击按钮后出现蓝色边框的问题
        )}
      >
        F
      </button>

      <h2 className="ml-4 text-2xl font-semibold">{WEBSITE}</h2>
    </Link>
  );
}
