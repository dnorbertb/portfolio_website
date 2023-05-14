import Image from 'next/image';
import Icon from '../components/Icon';
import { mdiLinkedin, mdiGithub, mdiStackOverflow } from '@mdi/js';
import { Metadata } from 'next';

import profilePic from '../assets/me.jpg';
import styles from '../styles/Modules/HomePage.module.scss';

export const metadata: Metadata = {
  title: 'Norbert Bednarczyk',
  description: 'Norbert Bednarczyk - smart, fast learner, web developer!',
};

export default function Page() {
  return (
    <div className={styles['center-container']}>
      <div className={styles.greeting}>
        <span className={styles['greeting__hi']}>Hi!</span>
        <h1 className={styles['greeting__primary']}>
          I&apos;m <strong>Norbert!</strong>
        </h1>
        <h2 className={styles['greeting__secondary']}>
          I&apos;m a &lt;developer&gt;!
        </h2>
      </div>
      <Image
        className={styles['profile-image']}
        src={profilePic}
        alt="Memoji of me"
      />
      <div className={styles.accounts}>
        <a
          href="https://www.linkedin.com/in/norbert-bednarczyk-931692227/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon className={styles['accounts__icon']} svgPath={mdiLinkedin} />
        </a>
        <a href="https://github.com/dnorbertb" target="_blank" rel="noreferrer">
          <Icon className={styles['accounts__icon']} svgPath={mdiGithub} />
        </a>
        <a
          href="https://stackoverflow.com/users/17151859/norbert"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            className={styles['accounts__icon']}
            svgPath={mdiStackOverflow}
          />
        </a>
      </div>
    </div>
  );
}
