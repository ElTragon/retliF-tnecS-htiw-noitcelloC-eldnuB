import Seo from "../Seo";
import { ReactNode } from "react";
import css from "./index.module.css";

type Props = {
  children: ReactNode;
};
export default function Page({ children }: Props) {
  return (
    <>
      <Seo />
      <main className={css.container}>{children}</main>
    </>
  );
}
