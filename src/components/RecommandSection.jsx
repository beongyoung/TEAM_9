import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const LinkItem = styled.div`
  display: flex;
  gap: 5px;
  color: black;
`;

/**
 * 맞춤 의약품 추천 링크 섹션입니다.
 * 임시로 recommand로 이동하도록 만든 상태입니다.
 */
export default function RecommandSection() {
  return (
    <div>
      <h2>아직 추천받은 영양제가 없어요</h2>
      <LinkWrapper>
        <Link to="recommand">
          <LinkItem>
            <span>나의 맞춤 의약품 추천받기</span>
            {">"}
          </LinkItem>
        </Link>
        <Link to="recommand">
          <LinkItem>
            <span>나의 맞춤 영양제 추천받기</span>
            {">"}
          </LinkItem>
        </Link>
      </LinkWrapper>
    </div>
  );
}
