'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AlignJustifyIcon } from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { cn } from '@/utils/helper';

import { SLOGAN, WEBSITE } from '@/constants/info';

import { navItems } from './nav-list';

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={'outline'} size={'icon'} className={cn('sm:hidden')}>
          <AlignJustifyIcon size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>{WEBSITE}</SheetTitle>
          <SheetDescription>{SLOGAN}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 pt-8">
          {navItems.map((el) => (
            <Link
              key={el.link}
              href={el.link}
              className={cn(
                buttonVariants({
                  variant: pathname === el.link ? 'default' : 'ghost',
                }),
                'text-md px-4 py-2 !rounded-none flex gap-2 items-center !justify-start w-full',
              )}
              onClick={() => {
                setOpen(false);
              }}
            >
              {el.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
