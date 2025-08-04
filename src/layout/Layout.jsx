import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { Header, ActionBar } from "../components";

export default function Layout() {
  return (
    <>
      <Header />
      <div className={style.layout}>
        <Outlet />
      </div>
      <ActionBar />
    </>
  );
}
