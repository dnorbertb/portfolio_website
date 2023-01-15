import "../styles/global.scss";
import styles from "../styles/Modules/HomeLayout.module.scss";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="author" content="Norbert Bednarczyk" />
        <meta name="keywords" content="TypeScript, JavaScript, CSS, SASS, SCSS, TailwindCSS, React, Next, Next.js, Vue, Angular, Astro, Node.js, Node, Front-end, back-end, developer, programmer, employee, job" />
      </head>
      <body>
        <main className={styles.main}>
          <a href="/" className={styles.logo}>
            NB
          </a>
          {children}
          <nav className={styles.nav}>
            <a href="/">Home page</a>
            <a href="about-me">About me</a>
            <a href="projects">Projects</a>
          </nav>
          <div className={styles["bg-video"]}>
            <video className={styles["bg-video__content"]} autoPlay={true} muted={true} loop={true}>
              <source src="videos/background.mp4" type="video/mp4" />
            </video>
          </div>
        </main>
      </body>
    </html>
  );
}
