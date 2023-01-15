import { ReactNode } from "react";
import styles from "../styles/Modules/SPageContainer.module.scss";

type Props = {
  children: ReactNode
}

export default function Page(props: Props) {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  );
}
``