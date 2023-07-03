/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import BoxHover from "@/components/common/BoxHover";
import Image from "next/image";
import { memo } from "react";

const ThemeItem = (props: any) => {
  const active = props.data.name === props.themeActive;

  return (
    <div>
      <div className="relative">
        <BoxHover
          className={`relative border-[1px] border-solid ${
            active ? "border-[var(--purple-primary)]" : "border-transparent"
          }`}
          childrenHover={
            <button
              onClick={() => {
                props.handleChangeTheme(props.data);
              }}
              className="mx-4 w-full rounded-full bg-[var(--purple-primary)] py-[6px] text-[12px] font-medium text-[var(--white)] hover:brightness-90"
              type="button"
            >
              Áp dụng
            </button>
          }
        >
          <figure>
            <Image
              className="max-w-[150px] transition-transform duration-700 group-hover:scale-110"
              width={160}
              height={110}
              src={props?.data?.itemS}
              alt={props?.data?.name}
              loading="lazy"
            ></Image>
          </figure>
        </BoxHover>
        {active && (
          <div className="absolute bottom-2 right-2 z-50">
            <div className="h-6 w-6 overflow-hidden rounded-full">
              <i className="icon ic-check bg-[var(--purple-primary)] p-1 !text-xs text-[var(--white)]"></i>
            </div>
          </div>
        )}
      </div>

      <div className="mt-1 text-xs font-medium">{props?.data?.name}</div>
    </div>
  );
};

export default memo(ThemeItem);
