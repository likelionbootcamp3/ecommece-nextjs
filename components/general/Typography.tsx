import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";

/**
 * Title
 */
export type TitleVariantProps = VariantProps<typeof titleVariants>;
export const titleVariants = cva("color-black font-heading", {
  variants: {
    level: {
      1: "font-bold text-h1 text-[#252B42]",
      2: "font-bold text-h2",
      3: "font-bold text-h3",
      4: "font-normal text-h4",
      5: "font-bold text-h5",
      6: "font-bold text-h6",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

// Type
export interface TitleProps extends TitleVariantProps {
  className?: string;
  children?: React.ReactNode;
}

export const Title = ({ level = 1, className, children }: TitleProps) => {
  switch (level) {
    case 1:
      return (
        <h1 className={cx(titleVariants({ level }), className)}>{children}</h1>
      );
    case 2:
      return (
        <h2 className={cx(titleVariants({ level }), className)}>{children}</h2>
      );
    case 3:
      return (
        <h3 className={cx(titleVariants({ level }), className)}>{children}</h3>
      );
    case 4:
      return (
        <h4 className={cx(titleVariants({ level }), className)}>{children}</h4>
      );
    case 5:
      return (
        <h5 className={cx(titleVariants({ level }), className)}>{children}</h5>
      );
    case 6:
      return (
        <h6 className={cx(titleVariants({ level }), className)}>{children}</h6>
      );
    default:
      return (
        <h1 className={cx(titleVariants({ level }), className)}>{children}</h1>
      );
  }
};

/**
 * Text
 */
export type TextVariantProps = VariantProps<typeof textVariants>;
export const textVariants = cva("", {
  variants: {},
  defaultVariants: {},
});

export interface TextProps extends TextVariantProps {
  children?: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return <p>{children}</p>;
};
