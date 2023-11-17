import styled from "styled-components";
import HealthGuideBox from "./HealthGuide.jsx";
import LifeGuideBox from "./LifeGuide.jsx";
import { SubTitle } from "../../../../components/paragraphs.jsx";

const DiseaseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .noMargin {
    margin-bottom: 0;
  }
  .currentDisease {
    width: 100%;
    height: 280px;
    background-color: #d9d9d9;
  }
  .healthGuideWrapper {
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;

export default function CurrentDiseaseGuide() {
  return (
    <DiseaseWrapper>
      <SubTitle className="noMargin">현재 계절에 많이 발생하는 질병</SubTitle>
      <div className="currentDisease"></div>
      <div className="healthGuideWrapper">
        <HealthGuideBox />
        <LifeGuideBox />
      </div>
    </DiseaseWrapper>
  );
}
