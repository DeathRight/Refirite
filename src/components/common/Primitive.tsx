import { PrimitiveProps } from "@app/util/component-props";
import { Slot } from "@radix-ui/react-slot";
import { styled } from "stitches.config";

const Primitive = (props: PrimitiveProps) => {
  const {
    asChild,
    className,
    children,
    color,
    bgColor,
    fontSize,
    width,
    height,
    size,
  } = props;
  let { as } = props;
  as ??= "div";
  const comp = asChild ? Slot : as;
  const Prim = styled(comp, {
    color,
    backgroundColor: bgColor,
    fontSize,
    width,
    height,
    size,
  });

  return <Prim className={className}>{children}</Prim>;
};

export default Primitive;
