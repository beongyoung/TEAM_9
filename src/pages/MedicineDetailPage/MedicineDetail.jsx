import styles from "styled-components";
import { SubTitle, Bold, Paragraph } from "../../components/paragraphs.jsx";

const Summery = styles.div`
  display: flex;
  gap: 80px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Pic = styles.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`;

export default function MedicineDetail({ resource }) {
  const data = resource();

  return (
    <>
      <SubTitle>{data.disease_name}</SubTitle>
      <Summery>
        <Pic src={data.medicine_image} alt={data.medicine_name} />
        <div className="descriptions">
          <Bold>의약품 명</Bold>
          <Paragraph>{data.medicine_name}</Paragraph>
        </div>
      </Summery>
      <article>
        <section>
          <SubTitle>효능</SubTitle>
          <Paragraph>{data.medicine_efficacy || "없음"}</Paragraph>
        </section>
        <section>
          <SubTitle>용법, 용량</SubTitle>
          <Paragraph>{data.medicine_usage || "없음"}</Paragraph>
        </section>
        <section>
          <SubTitle>주의사항</SubTitle>
          <Paragraph>{data.medicine_caution || "없음"}</Paragraph>
        </section>
      </article>
    </>
  );
}
