import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#00A8E8]/40 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
  {
    variants: {
      variant: {
        default:   'bg-[#00A8E8] text-white hover:bg-[#0096d4] active:scale-[0.98]',
        secondary: 'bg-[#3340A0] text-white hover:bg-[#2a3590] active:scale-[0.98]',
        outline:   'border border-gray-200 bg-white text-[#1a1a2e] hover:bg-[#F8FCFF] hover:border-[#00A8E8]/40 active:scale-[0.98]',
        ghost:     'text-gray-600 hover:text-[#1a1a2e] hover:bg-gray-100',
        accent:    'bg-[#F2D16B] text-[#1a1a2e] hover:bg-[#e8c44a] font-bold active:scale-[0.98]',
        link:      'text-[#00A8E8] underline-offset-4 hover:underline h-auto p-0',
      },
      size: {
        default: 'h-10 px-5 rounded-md',
        sm:      'h-8 px-4 text-xs rounded-md',
        lg:      'h-12 px-7 rounded-lg text-[15px]',
        xl:      'h-14 px-9 rounded-lg text-base',
        icon:    'h-10 w-10 rounded-md',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);
