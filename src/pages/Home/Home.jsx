import styled from 'styled-components';
import MainBanner from './sections/MainBanner.jsx';
import CurrentHealthGuide from './sections/Guide/CurrentDiseaseGuide.jsx';
import MedicineRecommand from './sections/Medicine/MedicineRecommand.jsx';
import CommnunityPreview from './sections/Community/SelectCommunity.jsx';
import CenterMain from '../../components/CenterMain.jsx';

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
      <MainBanner />
      <CenterMain>
        <CurrentHealthGuide />
        <MedicineRecommand />
        <CommnunityPreview />
      </CenterMain>
    </StyledMain>
  );
}
