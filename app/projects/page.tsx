import styles from "../../styles/Modules/ProjectsPage.module.scss";
import { projectList } from "../../data/ProjectsList";
import ProjectEl from "../../components/ProjectEl";
import SPageContainer from "../../components/SPageContainer";

export default function Page() {
  return (
    <SPageContainer>
      <h1 className={styles.header}>Example projects</h1>
      {projectList.map(({ name, stack, dsc, href, github }, index) => {
        return <ProjectEl key={name + "-" + index} name={name} stack={stack} dsc={dsc} href={href} github={github} />;
      })}
    </SPageContainer>
  );
}
``;
