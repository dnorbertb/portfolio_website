import styles from "../styles/Modules/Paragraph.module.scss";

type Props = {
  title: string;
  content: string;
};

export default function Paragraph({ title, content }: Props) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
