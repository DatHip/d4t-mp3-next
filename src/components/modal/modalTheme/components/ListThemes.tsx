/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { memo } from "react";
import ThemeItem from "./ThemeItem";

const ListThemes = (props: any) => {
  return (
    <div className="w-full">
      <div className="mb-2 text-lg font-bold">{props?.data?.title}</div>
      <div className="flex flex-wrap items-center justify-start gap-4">
        {props?.data?.items?.map((e: any) => {
          return (
            <ThemeItem
              handleChangeTheme={props.handleChangeTheme}
              themeActive={props?.themeActive}
              data={e}
              key={e?.name}
            ></ThemeItem>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ListThemes);
