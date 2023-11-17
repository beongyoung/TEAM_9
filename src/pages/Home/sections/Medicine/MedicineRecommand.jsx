import styled from "styled-components";
import { SubTitle } from "../../../../components/paragraphs.jsx";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .noMargin {
      margin: 0;
    }
    .more {
      font-size: 1rem;
      color: #828282;
    }
  }
  .topBox {
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    background-color: #f7f7f7;
    border: 1px solid #cbcbcb;
  }
  .listBox {
    display: flex;
    width: 100%;
    height: 268px;
    gap: 36px;
    .listItem {
      flex: 25% 1 1;
      height: 100%;
      background-color: #d9d9d9;
    }
  }
`;

export default function MedicineRecommand() {
  return (
    <Wrapper>
      <div className="title">
        <SubTitle className="noMargin">의약품 추천</SubTitle>
        <Link to="/recommand">
          <span className="more">더보기</span>
        </Link>
      </div>
      <div className="topBox"></div>
      <div className="listBox">
        <div className="listItem"></div>
        <div className="listItem"></div>
        <div className="listItem"></div>
        <div className="listItem"></div>
      </div>
    </Wrapper>
  );
}
