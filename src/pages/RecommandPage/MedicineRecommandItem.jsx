import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 472px;
  display: flex;
  flex-direction: column;
`;

const Article = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  gap: 40px;
  padding: 20px;
  box-sizing: border-box;
`;
const DestWrapper = styled.div`
  flex-grow: 1;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
`;
const KeywordWrapper = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 264px;
  height: 320px;
  object-fit: cover;
`;

const SubTitle = styled.h3`
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0;
  margin-bottom: 1rem;
`;
const P = styled.p`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
const Keyword = styled.span`
  font-family: Pretendard;
  display: inline-block;
  box-sizing: border-box;
  height: 40px;
  padding: 10px 20px;
  border: 2px solid #ff6f00;
  border-radius: 20px;
`;
const Desc = styled.p`
  font-family: Pretendard;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: #ff6f00;
  color: white;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 700;
`;

export default function MedicineRecommandItem({
  medicine_code,
  medicine_image,
  medicine_name,
  medicine_efficacy,
  disease_name,
}) {
  return (
    <Wrapper>
      <Article>
        <Img src={medicine_image} alt={medicine_name} />
        <DestWrapper>
          <KeywordWrapper>
            <SubTitle>의약품 명</SubTitle>
            <P>{medicine_name}</P>
          </KeywordWrapper>
          <KeywordWrapper>
            <SubTitle>질병 이름</SubTitle>
            <Keyword>{disease_name}</Keyword>
          </KeywordWrapper>
          <KeywordWrapper>
            <SubTitle>효과·효능</SubTitle>
            <Desc>{medicine_efficacy}</Desc>
          </KeywordWrapper>
        </DestWrapper>
      </Article>
      <Link to={`/medicine/medicine/${medicine_code}`}>
        <MoreButton>더 자세히 알아보기</MoreButton>
      </Link>
    </Wrapper>
  );
}
