import styles from "../styles/Modules/ProjectEl.module.scss";
import Icon from "./Icon";
import { mdiLinkVariant, mdiGithub } from "@mdi/js";

type Props = {
  name: string;
  stack: string;
  dsc: string;
  href: string;
  github: string;
};

export default function ProjectEl({ name, stack, dsc, href, github }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.stack}>Stack: {stack}</p>
      <p className={styles.dsc}>{dsc}</p>
      <div className={styles.actions}>
        <a href={github} className={styles.link} target="_blank" rel="noreferrer">
          <Icon className={styles.icon} svgPath={mdiGithub} />
        </a>
        <a href={href} className={styles.link} target="_blank" rel="noreferrer">
          <Icon className={styles.icon} svgPath={mdiLinkVariant} />
        </a>
      </div>
    </div>
  );
}
