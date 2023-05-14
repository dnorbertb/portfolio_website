import { pArr } from "../../data/AboutContent";
import SPageContainer from "../../components/SPageContainer";
import Paragraph from "../../components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Norbert Bednarczyk - About me',
  description: 'Norbert Bednarczyk - more about me!',
};

export default function Page() {
  return (
    <SPageContainer>
      {pArr.map(({ title, content }, index) => {
        return <Paragraph key={"about-p-" + index} title={title} content={content} />;
      })}
    </SPageContainer>
  );
}
``;
