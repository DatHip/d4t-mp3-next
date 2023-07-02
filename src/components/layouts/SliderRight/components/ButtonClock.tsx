import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import BoxHoverAction from "@/components/common/BoxHoverAction";
import React from "react";

const ButtonClock = () => {
  return (
    <BoxHoverAction
      content="Hẹn giờ"
      className="flex h-8 w-8 bg-[var(--alpha-bg)] !text-base text-[var(--text-primary)]"
    >
      <AccessAlarmOutlinedIcon fontSize="inherit"></AccessAlarmOutlinedIcon>
    </BoxHoverAction>
  );
};

export default ButtonClock;
