import css from "./index.module.css";
import cx from "classnames";

type Props = {
  scent: string;
};

export function Chip({ scent }: Props) {
  return <h3 className={cx(css.chip, css[scent])}>{scent}</h3>;
}
