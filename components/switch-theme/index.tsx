'use client';

import * as React from 'react';

import { useTheme } from 'next-themes';

import { MoonStarIcon, SunIcon, Tv2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/utils/helper';

const themeOptions = [
  {
    value: 'light',
    label: '浅色',
    icon: <SunIcon size={16} />,
  },
  {
    value: 'dark',
    label: '深色',
    icon: <MoonStarIcon size={16} />,
  },
  {
    value: 'system',
    label: '系统',
    icon: <Tv2Icon size={16} />,
  },
];

export function SwitchTheme() {
  const [open, setOpen] = React.useState(false);
  const { setTheme, theme, resolvedTheme } = useTheme();
  const icon = React.useMemo(() => {
    if (!theme) {
      return <Tv2Icon size={16} />;
    } else {
      return themeOptions.filter((el) => el.value === resolvedTheme)?.[0]?.icon;
    }
  }, [theme, resolvedTheme]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="ghost"
          size={'icon'}
        >
          {icon}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandGroup>
            {themeOptions.map((el) => (
              <CommandItem
                key={el.value}
                value={el.value}
                onSelect={(currentValue) => {
                  setTheme(currentValue);
                  setOpen(false);
                }}
              >
                <div className="flex items-center  gap-2">
                  <div
                    className={cn(
                      theme === el.value ? 'opacity-100' : 'opacity-50',
                    )}
                  >
                    {el.icon}
                  </div>
                  <div
                    className={cn(
                      'text-sm',
                      theme === el.value ? 'opacity-100' : 'opacity-50',
                    )}
                  >
                    {el.label}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
