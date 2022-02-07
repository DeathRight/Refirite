import Mod from "react-overlays/Modal";
import { styled } from "stitches.config";

const Modal = styled(Mod, {
  position: "fixed",
  zIndex: "$4",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  flexGrow: "0",
  flexShrink: "0",
  justifyContent: "center",
  alignItems: "center",
});

export default Modal;
