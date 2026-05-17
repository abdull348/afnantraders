'use client';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/lib/button-variants';

function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
