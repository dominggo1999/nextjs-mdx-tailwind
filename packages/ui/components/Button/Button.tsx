import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { FocusRing } from "react-aria";
import ButtonLoadingIndicator from "./ButtonLoadingIndicator";
import type { IconType } from "react-icons/lib";
import { createPolymorphicComponent } from "../../utils/create-polymorphic-component";

const buttonCva = cva(
  "inline-flex items-center justify-center rounded font-medium outline-none select-none gap-x-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-400 hover:bg-blue-500",
        secondary: "bg-blue-200 hover:bg-blue-300",
        destructive: "bg-red-400 hover:bg-red-500",
        transparent: "bg-transparent hover:text-blue-500 dark:text-white",
      },
      size: {
        sm: "text-sm px-2 py-2",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-3",
        xl: "text-xl px-5 py-4",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      isDisabled: {
        true: "opacity-40 dark:opacity-20 cursor-not-allowed",
      },
      isRounded: {
        true: "rounded-full",
      },
      isAspectSquare: {
        true: "aspect-square",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      isDisabled: false,
      isRounded: false,
      isAspectSquare: false,
    },
  },
);

const ringCva = cva("outline-2 outline-offset-2", {
  variants: {
    variant: {
      primary: "outline-blue-400",
      secondary: "outline-blue-400",
      destructive: "outline-red-400",
      transparent: "outline-blue-400",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const iconCva = cva("outline-2 outline-offset-2", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IButton
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  children?: React.ReactNode;
  icon?: IconType;
  iconPosition?: "right" | "left";
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingPosition?: "right" | "left";
  ref?: React.ForwardedRef<HTMLButtonElement>;
}

const _Button = forwardRef<HTMLButtonElement, IButton & { component: any }>(
  (props, ref) => {
    const {
      children,
      variant,
      size,
      fullWidth,
      isDisabled,
      className = "",
      isLoading,
      loadingPosition = "left",
      icon,
      iconPosition = "left",
      isRounded,
      isAspectSquare,
      component,
      ...restProps
    } = props;

    const iconClassName = iconCva({ size });

    const renderLoadingIndicator = () => {
      let loadingIndicatorSize;

      switch (size) {
        case "sm":
          loadingIndicatorSize = 20;
          break;
        case "md":
          loadingIndicatorSize = 24;
          break;
        case "lg":
          loadingIndicatorSize = 28;
          break;
        case "xl":
          loadingIndicatorSize = 32;
          break;
        default:
          break;
      }

      return (
        <ButtonLoadingIndicator
          width={loadingIndicatorSize}
          height={loadingIndicatorSize}
          isIndeterminate
        />
      );
    };

    const Element = component || "button";

    return (
      <FocusRing focusRingClass={ringCva({ variant })}>
        <Element
          ref={ref}
          disabled={isDisabled}
          className={`${className} ${buttonCva({
            variant,
            size,
            fullWidth,
            isDisabled,
            isRounded,
            isAspectSquare: isRounded || isAspectSquare,
          })}`}
          {...restProps}
        >
          {icon &&
            iconPosition === "left" &&
            !isLoading &&
            icon({ className: iconClassName })}

          {isLoading && loadingPosition === "left" && renderLoadingIndicator()}

          {children && children}

          {icon &&
            iconPosition === "right" &&
            !isLoading &&
            icon({ className: iconClassName })}

          {isLoading && loadingPosition === "right" && renderLoadingIndicator()}
        </Element>
      </FocusRing>
    );
  },
);

export default createPolymorphicComponent<"button", IButton>(_Button);
