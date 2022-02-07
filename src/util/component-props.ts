import React, { ReactNode } from "react";

export type StyledPrimitive =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;
export interface PrimitiveProps extends CSSAttr {
  children?: ReactNode;
  asChild?: boolean;
  className?: string;
  as?: StyledPrimitive;
}
export interface CSSAttr {
  color?: string;
  bgColor?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  size?: string;
}

export interface SpinnerProps
  extends Omit<PrimitiveProps, "children" | "asChild"> {}

export interface BackdropProps extends Pick<PrimitiveProps, "children"> {
  show?: boolean;
}

export interface ToggleThemeButtonProps {
  defaultPressed?: boolean;
  onPressed?: (pressed: boolean) => void;
}
