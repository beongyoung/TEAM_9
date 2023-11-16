import styled from "styled-components";
import CenterMain from "../../components/CenterMain.jsx";
import { TitleSkeleton, PSkeleton } from "../../components/skeletons.jsx";

const SummeryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 60px;
  margin-bottom: 100px;
`;

const Pic = styled.div`
  width: 340px;
  height: 480px;
  background-color: #ccc;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

export default function DiseaseDetailSkeleton() {
  return (
    <CenterMain>
      <SummeryWrapper>
        <Pic></Pic>
        <div className="descriptions">
          <TitleSkeleton />
          <SubTitle>질병소개</SubTitle>
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
    </CenterMain>
  );
}
