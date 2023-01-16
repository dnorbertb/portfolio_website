import Icon from "../components/Icon";
import { mdiLinkedin, mdiGithub, mdiStackOverflow } from "@mdi/js";

import styles from "../styles/Modules/HomePage.module.scss";

export default function Page() {
  return (
    <div className={styles["center-container"]}>
      <div className={styles.greeting}>
        <span className={styles["greeting__hi"]}>Hi!</span>
        <h1 className={styles["greeting__primary"]}>
          I'm <strong>Norbert!</strong>
        </h1>
        <h2 className={styles["greeting__secondary"]}>I'm a &lt;developer&gt;!</h2>
      </div>
      <img className={styles["profile-image"]} src="/me.jpg" alt="Memoji of me" />
      <div className={styles.accounts}>
        <a href="http://linkedin.com" target="_blank">
          <Icon className={styles["accounts__icon"]} svgPath={mdiLinkedin} />
        </a>
        <a href="http://github.com" target="_blank">
          <Icon className={styles["accounts__icon"]} svgPath={mdiGithub} />
        </a>
        <a href="http://stackoverflow.com" target="_blank">
          <Icon className={styles["accounts__icon"]} svgPath={mdiStackOverflow} />
        </a>
      </div>
    </div>
  );
}
