import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useAuth } from "reactfire";
import { styled } from "stitches.config";

import Dialog, { DialogActions, DialogTitle } from "./Dialog";
import IconButton from "./IconButton";

const SOBStyle = styled(IconButton, {
  borderColor: "transparent",
  backgroundColor: "$error",
  color: "$errorA",
  "&:hover": {
    backgroundColor: "$errorHover",
  },
  "&:active": {
    backgroundColor: "$errorSelect",
  },
});

const StayIcon = styled(IconButton, {
  borderColor: "transparent",
  backgroundColor: "$info",
  color: "$infoA",
  "&:hover": {
    backgroundColor: "$infoHover",
  },
  "&:active": {
    backgroundColor: "$infoSelect",
  },
});

const SignOutButton = () => {
  const auth = useAuth();
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <SOBStyle
        icon={ExitIcon}
        aria-label="Sign out"
        onClick={() => setIsShown(true)}
      />
      <Dialog show={isShown} onHide={() => setIsShown(false)}>
        <DialogTitle>Are you sure you want to sign out?</DialogTitle>
        <DialogActions>
          <StayIcon
            icon={EnterIcon}
            aria-label="Stay signed in"
            onClick={() => setIsShown(false)}
          />
          <SOBStyle
            icon={ExitIcon}
            aria-label="Sign out"
            onClick={() => {
              setIsShown(false);
              auth.signOut();
            }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SignOutButton;
