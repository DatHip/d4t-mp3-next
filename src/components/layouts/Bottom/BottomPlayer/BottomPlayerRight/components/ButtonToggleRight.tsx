import BoxHoverAction from "@/components/common/BoxHoverAction";
import { useDisclosure } from "@mantine/hooks";
import SliderRight from "@/components/layouts/SliderRight/SliderRight";
const ButtonToggleRight = () => {
  const [opend, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <SliderRight opened={opend} onClose={close}></SliderRight>
      <BoxHoverAction
        onClick={toggle}
        className={`${
          opend
            ? "text-white] bg-[var(--purple-primary)]"
            : "bg-[hsla(0,0%,100%,.1)] text-[var(--player-text)]"
        } hover:bg-bg-[hsla(0,0%,100%,.2) rounded-md `}
        content="Danh sách phát"
      >
        <div className="h-6 ">
          <i className="icon ic-list-music !text-base"></i>
        </div>
      </BoxHoverAction>
    </>
  );
};

export default ButtonToggleRight;
