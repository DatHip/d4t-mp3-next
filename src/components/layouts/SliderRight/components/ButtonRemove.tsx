import BoxHoverAction from "@/components/common/BoxHoverAction";
import React from "react";
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
const ButtonRemove = () => {
  return (
    <BoxHoverAction
      content="Xoá danh sách phát"
      className="flex h-8 w-8 bg-[var(--alpha-bg)] !text-base text-[var(--text-primary)]"
    >
      <CancelPresentationOutlinedIcon fontSize="inherit"></CancelPresentationOutlinedIcon>
    </BoxHoverAction>
  );
};

export default ButtonRemove;
