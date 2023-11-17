import styled from "styled-components";
import DiseaseProtectTable from "./DiseaseProtectTable.jsx";
import DiseaseMedicine from "./DiseaseMedicine.jsx";
import {
  Title,
  SubTitle,
  Bold,
  Paragraph,
} from "../../components/paragraphs.jsx";

const SummeryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 60px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Pic = styled.img`
  width: 340px;
  height: 480px;
  background-color: #ccc;
  flex-shrink: 0;
  object-fit: cover;
`;

export default function DiseaseDetail({ resource }) {
  const data = resource();

  return (
    <>
      <SummeryWrapper>
        <Pic src={data.disease_image} alt={data.disease_name} />
        <div className="descriptions">
          <SubTitle>{data.disease_name}</SubTitle>
          <Bold>질병증상</Bold>
          <Paragraph>{data.disease_symptom}</Paragraph>
        </div>
      </SummeryWrapper>
      <article>
        <Title>질병 치료법</Title>
        <section>
          <SubTitle>예방법</SubTitle>
          <DiseaseProtectTable data={data.disease_protect.keyword} />
          <Paragraph>{data.disease_protect.description}</Paragraph>
        </section>
        <section>
          <SubTitle>치료법</SubTitle>
          <Paragraph>{data.disease_cure.description}</Paragraph>
        </section>
        <section>
          <SubTitle>관련 약품</SubTitle>
          <DiseaseMedicine data={data.disease_cure.keyword} />
        </section>
      </article>
    </>
  );
}
