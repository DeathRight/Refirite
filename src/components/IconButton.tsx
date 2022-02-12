import {
  IconButtonProps,
  IconButtonPropsSpecific,
} from "@app/util/component-props";
import { styled } from "stitches.config";

import Button from "./common/Button";

const IconButton = (props: IconButtonProps) => {
  const { text, leftIcon, rightIcon, icon } = props;

  // Remove specific props so we can spread to base button component
  // No actual performance hit, since it should never have to do more than a handful of iterations
  const buttonProps = Object.fromEntries(
    Object.entries(props).filter(([k]) => !IconButtonPropsSpecific[k])
  );

  const LeftIcon =
    leftIcon && styled(leftIcon, { marginRight: "$1", order: "0" });
  const Icon = icon && styled(icon, { order: "1" });
  const Child = text && styled(() => <span>{text}</span>, { order: "1" });
  const RightIcon =
    rightIcon && styled(rightIcon, { marginLeft: "$1", order: "2" });

  return (
    <Button role="button" {...buttonProps}>
      {LeftIcon && <LeftIcon />}
      {Child && <Child />} {Icon && <Icon />}
      {RightIcon && <RightIcon />}
    </Button>
  );
};

export default IconButton;
