import styled from "styled-components";
import RelativeDiseases from "./RelativeDiseases.jsx";
import { SubTitle, Bold } from "../../components/paragraphs.jsx";

const Summery = styled.div`
  display: flex;
  gap: 80px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Pic = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
`;

export default function NutrientDetail({ resource }) {
  const data = resource().result; //pending backend

  return (
    <>
      <SubTitle>{data.nutrients_name}</SubTitle>
      <Summery>
        <Pic src={data.image_url} alt={data.image_url} />
        <div className="descriptions">
          <Bold>효능</Bold>
          <p>{data.nutrients_efficiency || "없음"}</p>
        </div>
      </Summery>
      <article>
        <section>
          <SubTitle>관련 질병</SubTitle>
          <RelativeDiseases data={data} />
        </section>
      </article>
    </>
  );
}
