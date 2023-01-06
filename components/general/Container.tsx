import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

// Variants
export type ContainerVariantProps = VariantProps<typeof containerVariants>;
export const containerVariants = cva("mx-auto px-4 sm:px-6", {
  variants: {
    fluid: {
      false: "max-w-screen-xl",
    },
  },
  defaultVariants: {
    fluid: false,
  },
});

// Type
export interface ContainerProps extends ContainerVariantProps {
  children?: React.ReactNode;
}

/**
 * Container
 */
const Container = ({ fluid = false, children }: ContainerProps) => {
  return <div className={containerVariants({ fluid })}>{children}</div>;
};

export default Container;
