import { AiOutlineClose } from "react-icons/ai";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { useEffect } from "react";

// Variants
export type DrawerVariantProps = VariantProps<typeof drawerVariants>;
export const drawerVariants = cva(
  "fixed top-0 h-screen z-40 w-80 overflow-y-auto bg-white p-4 duration-500",
  {
    variants: {
      isOpen: {
        true: "-translate-x-0 opacity-100",
        false: "opacity-0",
      },
      placement: {
        left: "left-0",
        right: "right-0",
      },
    },
    defaultVariants: {
      isOpen: false,
      placement: "left",
    },
    compoundVariants: [
      {
        isOpen: false,
        placement: "left",
        class: "-translate-x-full",
      },
      {
        isOpen: false,
        placement: "right",
        class: "translate-x-full",
      },
    ],
  }
);
export const drawerBackdropVariants = cva(
  "fixed inset-0 z-30 bg-gray-500 duration-300",
  {
    variants: {
      isOpen: {
        true: "visible opacity-50",
        false: "invisible opacity-0",
      },
    },
    defaultVariants: {
      isOpen: false,
    },
  }
);

// Type
export interface DrawerProps extends DrawerVariantProps {
  onClose: () => void;
  closable?: boolean;
  placement?: "left" | "right";
  children: React.ReactNode;
}

/**
 * Drawer
 */
const Drawer = ({
  isOpen,
  onClose,
  closable = false,
  placement = "left",
  children,
}: DrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {/* Drawer Content */}
      <div className={drawerVariants({ isOpen, placement })}>
        {/* Close Button */}
        {closable && (
          <button className="absolute right-4 top-4" onClick={onClose}>
            <AiOutlineClose size={28} />
          </button>
        )}
        {children}
      </div>

      {/* Drawer Backdrop */}
      <div
        className={drawerBackdropVariants({ isOpen })}
        onClick={onClose}
      ></div>
    </>
  );
};

export default Drawer;
