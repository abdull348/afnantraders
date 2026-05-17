import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:   'border-[#00A8E8]/20 bg-[#00A8E8]/8 text-[#00A8E8]',
        secondary: 'border-[#3340A0]/20 bg-[#3340A0]/8 text-[#3340A0]',
        accent:    'border-[#F2D16B]/40 bg-[#F2D16B]/15 text-[#a07e00]',
        outline:   'border-gray-200 text-gray-600 bg-transparent',
        muted:     'border-transparent bg-gray-100 text-gray-500',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
