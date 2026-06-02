'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex h-full w-full items-center justify-center rounded-full border border-white/30 bg-white/20 text-neutral-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-white/30 hover:text-neutral-600 dark:border-white/20 dark:bg-black/30 dark:text-neutral-300 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] dark:hover:border-white/30 dark:hover:bg-black/40 dark:hover:text-neutral-200"
          aria-label="Toggle theme"
        >
          <Sun className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 transition-all md:h-6 md:w-6 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all md:h-6 md:w-6 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
