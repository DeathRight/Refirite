import { AriaAttributes } from "react";

export type StyledPrimitive =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;

/**
 * List of props specific to the component. Used to omit non-generic props for use in property spreading to children
 */
export type PropsSpecific = { [key: string]: boolean };
/* -------------------------------- Primitive ------------------------------- */
export interface PrimitiveProps extends AriaAttributes {
  children?: React.ReactNode;
  className?: string;
  as?: StyledPrimitive;
}
export const PrimitivePropsSpecific: PropsSpecific = {
  children: true,
  className: true,
  as: true,
};
/* ------------------------------------ * ----------------------------------- */
export interface SpinnerProps extends Omit<PrimitiveProps, "children"> {
  color?: string;
  size?: string;
}

export interface ToggleButtonProps extends PrimitiveProps {
  defaultPressed?: boolean;
  onPressed?: (pressed: boolean) => void;
  contentOn?: JSX.Element;
  contentOff?: JSX.Element;
  ariaLabel?: string;
}

export interface ToggleThemeButtonProps {
  defaultPressed?: boolean;
  onPressed?: (pressed: boolean) => void;
}
/* ------------------------------- IconButton ------------------------------- */
export interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  leftIcon?: StyledPrimitive;
  rightIcon?: StyledPrimitive;
  icon?: StyledPrimitive;
  text?: string;
}
export const IconButtonPropsSpecific: PropsSpecific = {
  leftIcon: true,
  rightIcon: true,
  icon: true,
  text: true,
};
/* --------------------------------- Dialog --------------------------------- */
export interface DialogProps extends PrimitiveProps {
  show: boolean;
  onHide: () => void;
}
export const DialogPropsSpecific: PropsSpecific = {
  ...PrimitivePropsSpecific,
  show: true,
  onHide: true,
};
/* ------------------------------------ * ----------------------------------- */
export interface SignInFormProps {
  status: "loading" | "error" | "success";
}
