/* eslint-disable @typescript-eslint/no-unused-vars */
import { THEMES } from "@/data/dataThemes";
import { Modal } from "@mantine/core";
import ListThemes from "./components/ListThemes";
import { useDispatch, useSelector } from "react-redux";
import { selectThemes } from "@/store/slice/theme/selector";
import { useCallback } from "react";
import { onChangeTheme } from "@/store/slice/theme";

interface ModalThemeProps {
  opend: boolean;
  close: () => void;
}

const ModalTheme: React.FC<ModalThemeProps> = ({ close, opend }) => {
  const themeActive = useSelector(selectThemes);
  const dispatch = useDispatch();
  const handleChangeTheme = useCallback((data: any) => {
    dispatch(onChangeTheme(data));
  }, []);

  return (
    <Modal
      classNames={{
        header: "bg-[var(--primary-bg)]",
        body: "bg-[var(--primary-bg)] w-full max-w-[900px] pb-4",
        content:
          "bg-[var(--primary-bg)] min-h-[600px] max-h-[60vh] pb-4 text-[var(--text-primary)] flex-1 w-full max-w-[900px]",
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
      <div className="flex flex-col items-center justify-start gap-4">
        {THEMES.map((themes) => {
          return (
            <ListThemes
              handleChangeTheme={handleChangeTheme}
              themeActive={themeActive.name}
              key={themes.title}
              data={themes}
            ></ListThemes>
          );
        })}
      </div>
    </Modal>
  );
};

export default ModalTheme;
