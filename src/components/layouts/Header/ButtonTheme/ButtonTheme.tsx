import IconTheme from "@/asset/icons/IconTheme";
import ModalTheme from "@/components/modal/modalTheme/ModalTheme";
import { useDisclosure } from "@mantine/hooks";
import Tippy from "@tippyjs/react";
import React from "react";

const ButtonTheme = () => {
  const [opend, { close, open }] = useDisclosure(false);

  return (
    <>
      <ModalTheme close={close} opend={opend}></ModalTheme>
      <Tippy content="Chủ đề">
        <div
          onClick={open}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--alpha-bg)] hover:shadow-md"
        >
          <IconTheme></IconTheme>
        </div>
      </Tippy>
    </>
  );
};

export default ButtonTheme;
