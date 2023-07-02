import { THEMES } from "@/data/dataThemes";
import { Modal } from "@mantine/core";
import ListThemes from "./components/ListThemes";

interface ModalThemeProps {
  opend: boolean;
  close: () => void;
}

const ModalTheme: React.FC<ModalThemeProps> = ({ close, opend }) => {
  return (
    <Modal
      classNames={{
        header: "bg-[var(--primary-bg)]",
        body: "bg-[var(--primary-bg)]",
        content: "bg-[var(--primary-bg)] text-[var(--text-primary)]",
        title: "text-xl font-bold",
      }}
      sx={{
        ".mantine-Modal-close": {
          ":hover": {
            backgroundColor: "transparent",
          },
          svg: {
            width: 34,
            height: 34,
          },
        },
      }}
      title="Giao diện"
      onClose={close}
      opened={opend}
      centered
    >
      <div className="flex flex-col items-center justify-start gap-2">
        {THEMES.map((themes) => {
          return <ListThemes key={themes.title} data={themes}></ListThemes>;
        })}
      </div>
    </Modal>
  );
};

export default ModalTheme;
