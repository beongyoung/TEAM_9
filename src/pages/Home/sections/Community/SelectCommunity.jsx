import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SubTitle } from '../../../../components/paragraphs.jsx';

const StyledFrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .noMargin {
      margin-top: 0;
    }
    .more {
      font-size: 1rem;
      color: #828282;
    }
  }
  .buttonWrapper {
    display: flex;
    gap: 28px;
  }
  .bodyWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .skeleton {
      width: 100%;
      height: 200px;
      background-color: #f7f7f7;
    }
  }
`;

const Button = styled.span(({ $activate = false } = {}) => ({
  display: 'inline-block',
  height: '60px',
  padding: '16px 24px',
  boxSizing: 'border-box',
  border: $activate ? 'none' : '2px solid #FF6B00',
  borderRadius: '32px',
  backgroundColor: $activate ? '#FF6B00' : 'white',
  color: $activate ? 'white' : 'black',
  cursor: 'pointer',
}));

function SelectCommunity() {
  return (
    <StyledFrameWrapper>
      <div className="title">
        <SubTitle className="noMargin">커뮤니티</SubTitle>
        <Link to="/community">
          <span className="more">더보기</span>
        </Link>
      </div>
      <div className="buttonWrapper">
        <Button $activate>의료 상담</Button>
        <Button>리뷰</Button>
      </div>
      <div className="bodyWrapper">
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton" />
        <div className="skeleton" />
      </div>
    </StyledFrameWrapper>
  );
}

export default SelectCommunity;
