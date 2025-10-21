import { clsx } from "clsx";
import type { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
  as?: "section" | "div" | "footer";
} & React.HTMLAttributes<HTMLElement>;

export function Container({
  className,
  children,
  as: Component = "section",
  ...rest
}: ContainerProps) {
  return (
    <Component
      className={clsx("mx-auto py-24 md:py-32 lg:py-40", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
