import { settingActions } from "@/store/slice/setting";
import { selectTabRight } from "@/store/slice/setting/selector";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

const TabsNav = () => {
  const tab = useSelector(selectTabRight);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-1 items-center justify-start rounded-full bg-[var(--alpha-bg)] p-[3px]">
      <div
        onClick={() => dispatch(settingActions.setTabRight(false))}
        className={`flex w-full cursor-pointer items-center justify-center rounded-full py-[5px] text-xs font-medium ${
          tab
            ? "text-[var(--navigation-text)]"
            : "bg-[var(--tab-active-bg)] text-[var(--text-item-hover)] shadow-md"
        }`}
      >
        Danh sách phát
      </div>
      <div
        onClick={() => dispatch(settingActions.setTabRight(true))}
        className={`flex w-full cursor-pointer items-center justify-center rounded-full py-[5px] text-xs font-medium ${
          !tab
            ? "text-[var(--navigation-text)]"
            : "bg-[var(--tab-active-bg)] text-[var(--text-item-hover)] shadow-md"
        }`}
      >
        Nghe gần đây
      </div>
    </div>
  );
};

export default memo(TabsNav);
