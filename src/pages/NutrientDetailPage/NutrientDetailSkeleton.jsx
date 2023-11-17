import styled from "styled-components";
import { SubTitle, Bold } from "../../components/paragraphs.jsx";
import { SubTitleSkeleton, PSkeleton } from "../../components/skeletons.jsx";

const Summery = styled.div`
  display: flex;
  gap: 80px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Pic = styled.div`
  width: 320px;
  height: 320px;
  background-color: #d9d9d9;
`;

export default function NutrientDetailSkeleton() {
  return (
    <>
      <SubTitleSkeleton />
      <Summery>
        <Pic />
        <div className="descriptions">
          <Bold>효능</Bold>
          <PSkeleton />
        </div>
      </Summery>
      <article>
        <section>
          <SubTitle>관련 질병</SubTitle>
          <PSkeleton />
        </section>
      </article>
    </>
  );
}
