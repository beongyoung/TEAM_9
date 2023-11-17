import styled from "styled-components";
import { Overlap } from "./sections/Main";
import CurrentHealthGuide from "./sections/Guide";
import MedicineRecommand from "./sections/Medicine";
import CommnunityPreview from "./sections/Community/SelectCommunity.jsx";
import CenterMain from "../../components/CenterMain.jsx";

const StyledMain = styled.div`
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function main() {
  return (
    <StyledMain>
      <Overlap />
      <CenterMain>
        <CurrentHealthGuide />
        <MedicineRecommand />
        <CommnunityPreview />
      </CenterMain>
    </StyledMain>
  );
}
