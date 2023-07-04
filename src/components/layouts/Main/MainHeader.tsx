import { memo } from "react";
import styles from "./MainHeaderStyle.module.css";
import NavRoute from "../Header/NavRoute";
import Search from "../Header/Search";
import ButtonTheme from "../Header/ButtonTheme/ButtonTheme";
import ButtonSetting from "./../Header/ButtonSetting/ButtonSetting";
import ButtonUser from "../Header/ButtonUser/ButtonUser";

function MainHeader() {
  return (
    <header
      className={`fixed left-[240px] right-0 top-0 z-[99]  h-[70px] min-w-[660px]  px-[var(--padding-section)] ${
        styles.header || ""
      }`}
    >
      <div className="mx-auto flex h-full items-center justify-between">
        <div className="flex w-full items-center justify-start gap-5">
          <NavRoute></NavRoute>
          <Search></Search>
        </div>
        <div className="flex items-center justify-end gap-3">
          <ButtonTheme></ButtonTheme>
          <ButtonSetting></ButtonSetting>
          <ButtonUser></ButtonUser>
        </div>
      </div>
    </header>
  );
}
export default memo(MainHeader);
