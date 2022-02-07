import { ToggleThemeButtonProps } from "@app/util/component-props";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Toggle } from "@radix-ui/react-toggle";
import { useState } from "react";
import { styled } from "stitches.config";

const ToggleThemeStyle = styled(Toggle, {
  backgroundColor: "$attActive",
  color: "$attA",
  size: "32px",
  borderRadius: "$round",
  boxShadow: "$1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "$info",
  "&:focus": {
    boxShadow: "$2",
  },
  "&:hover": {
    backgroundColor: "$attHover",
  },
});

const ToggleTheme = ({ defaultPressed, onPressed }: ToggleThemeButtonProps) => {
  defaultPressed ??= false;
  const [isPressed, setIsPressed] = useState(defaultPressed);
  return (
    <ToggleThemeStyle
      pressed={isPressed}
      onPressedChange={(p) => {
        setIsPressed(p);
        onPressed?.(p);
      }}
    >
      {isPressed ? <MoonIcon /> : <SunIcon />}
    </ToggleThemeStyle>
  );
};

export default ToggleTheme;
