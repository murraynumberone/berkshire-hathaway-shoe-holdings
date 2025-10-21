import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

type WrapperProps = {
  className?: string;
  children: ReactNode;
};

export function Wrapper({ className, children }: WrapperProps) {
  return (
    <div
      className={twMerge(
        "mx-auto max-w-3xl px-4 text-center lg:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
