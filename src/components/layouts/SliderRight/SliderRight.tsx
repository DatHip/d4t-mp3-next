import { Drawer } from "@mantine/core";
import HeaderNavSlider from "./components/HeaderNavSlider";

interface SliderRightProps {
  opened: boolean;
  onClose: () => void;
}

const SliderRight: React.FC<SliderRightProps> = ({ onClose, opened }) => {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size={"330px"}
      padding={0}
      zIndex={1000}
      position="right"
      withOverlay={false}
      classNames={{
        header: "hidden",
        content:
          "max-h-[calc(100%_-_91px)] bg-[var(--layout-bg)] border-l-[1px] border-solid border-[var(--border-primary)] box-shadow-queue",
      }}
    >
      <div className="px-[10px]">
        <HeaderNavSlider></HeaderNavSlider>
      </div>
    </Drawer>
  );
};

export default SliderRight;
