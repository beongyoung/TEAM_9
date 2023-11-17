import styled from "styled-components";
import { Title, SubTitle, Bold } from "../../components/paragraphs.jsx";
import { SubTitleSkeleton, PSkeleton } from "../../components/skeletons.jsx";

const SummeryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 60px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Pic = styled.div`
  width: 340px;
  height: 480px;
  background-color: #ccc;
  flex-shrink: 0;
`;

export default function DiseaseDetailSkeleton() {
  return (
    <>
      <SummeryWrapper>
        <Pic />
        <div className="descriptions">
          <SubTitleSkeleton></SubTitleSkeleton>
          <Bold>질병증상</Bold>
          <PSkeleton />
        </div>
      </SummeryWrapper>
      <article>
        <Title>질병 치료법</Title>
        <section>
          <SubTitle>예방법</SubTitle>
          <PSkeleton />
        </section>
        <section>
          <SubTitle>치료법</SubTitle>
          <PSkeleton />
        </section>
        <section>
          <SubTitle>관련 약품</SubTitle>
          <PSkeleton />
        </section>
      </article>
    </>
  );
}
