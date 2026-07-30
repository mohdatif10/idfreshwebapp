import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "lime" | "outline" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-brand-800 text-cream hover:bg-brand-900 focus-visible:outline-brand-800",
  lime: "bg-lime-400 text-brand-900 hover:bg-lime-300 focus-visible:outline-brand-800",
  outline:
    "border-2 border-brand-800 text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-800",
  ghost: "text-brand-800 hover:bg-brand-50 focus-visible:outline-brand-800",
};

interface ButtonBaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-heading font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
