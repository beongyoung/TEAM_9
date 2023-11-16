import styled from "styled-components";
import { Title, SubTitle, Bold } from "../../components/paragraphs.jsx";

const SummeryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 60px;
  margin-bottom: 60px;
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
export default function DiseaseDetail({ resource }) {
  const data = resource();

  return (
    <>
      <SummeryWrapper>
        <Pic>(사진, api 미존재)</Pic>
        <div className="descriptions">
          <SubTitle>{data.disease_name}</SubTitle>
          <Bold>질병증상</Bold>
          <p>{data.disease_symptom}</p>
        </div>
      </SummeryWrapper>
      <article>
        <Title>질병 치료법</Title>
        <section>
          <SubTitle>예방법</SubTitle>
          <p>{data.disease_protect}</p>
        </section>
        <section>
          <SubTitle>치료법</SubTitle>
          <p>{data.disease_cure}</p>
        </section>
        <section>
          <SubTitle>관련 약품</SubTitle>
          <p>{data.medicine_name ?? "없음"}</p>
        </section>
      </article>
    </>
  );
}
