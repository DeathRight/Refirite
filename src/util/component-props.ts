export type StyledPrimitive =
  | keyof JSX.IntrinsicElements
  | React.ComponentType<any>;
export interface PrimitiveProps extends CSSAttr {
  children?: React.ReactNode;
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

export interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  leftIcon?: StyledPrimitive;
  rightIcon?: StyledPrimitive;
  icon?: StyledPrimitive;
  text?: string;
}
export const IconButtonPropsSpecific: { [key: string]: boolean } = {
  leftIcon: true,
  rightIcon: true,
  icon: true,
  text: true,
};

//
export interface SignInFormProps {
  status: "loading" | "error" | "success";
}
