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
const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

export default function NutrientRecommandItem({
  id,
  image_url,
  nutrients_name,
  disease_names,
  nutrients_efficiency,
}) {
  return (
    <Wrapper>
      <Article>
        <Img src={image_url} alt={nutrients_name} />
        <DestWrapper>
          <KeywordWrapper>
            <SubTitle>영양제 명</SubTitle>
            <P>{nutrients_name}</P>
          </KeywordWrapper>
          <KeywordWrapper>
            <SubTitle>질병 이름</SubTitle>
            <NameWrapper>
              {disease_names.map((name) => (
                <Keyword key={name}>{name}</Keyword>
              ))}
            </NameWrapper>
          </KeywordWrapper>
          <KeywordWrapper>
            <SubTitle>효과·효능</SubTitle>
            <Desc>{nutrients_efficiency}</Desc>
          </KeywordWrapper>
        </DestWrapper>
      </Article>
      <Link to={`/medicine/nutrient/${id}`}>
        <MoreButton>더 자세히 알아보기</MoreButton>
      </Link>
    </Wrapper>
  );
}
