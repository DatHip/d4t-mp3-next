import { Modal } from "@mantine/core";
import React, { memo } from "react";

interface IModalNewFeed {
  close: () => void;
  opend: boolean;
}

const ModalNewFeed = ({ close, opend }: IModalNewFeed) => {
  return <Modal onClose={close} opened={opend}></Modal>;
};

export default memo(ModalNewFeed);
