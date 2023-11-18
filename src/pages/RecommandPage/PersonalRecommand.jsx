import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CenterMain from "@/components/CenterMain.jsx";
import { Title } from "@/components/paragraphs.jsx";
import check from "@/assets/check.svg";

const TopMargin = styled.div`
  margin-top: 30px;
`;

const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Grey = styled.p`
  color: #9d9d9d;
  font-size: 1rem;
  margin: 0;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const CardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 25px;
  height: 160px;
  background-color: #f7f7f7;
  border: 1px solid ${({ selected }) => (selected ? "#ff6f00" : "#ccc")};
  cursor: pointer;
  .caption {
    font-size: 1rem;
    text-align: left;
  }
  .check {
    position: absolute;
    right: 25px;
    top: 25px;
    background-color: ${({ selected }) => (selected ? "#ff6f00" : "#9d9d9d")};
    width: 24px;
    height: 24px;
    border-radius: 12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.div`
  width: fit-content;
  background-color: #ff6f00;
  color: white;
  padding: 10px 30px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
`;

function Card({ id, selected, onSelect, caption }) {
  const handleClick = () => onSelect(id);

  return (
    <CardWrapper selected={selected} onClick={handleClick}>
      <span className="caption">{caption}</span>
      <div className="check">
        <img src={check} alt="check" />
      </div>
    </CardWrapper>
  );
}

// A08 노로바이러스
const cardKey = [
  "콧물",
  "인후통",
  "기침",
  "발열",
  "설사",
  "구토",
  "치통",
  "생리통",
  "복통",
  "호흡곤란",
  "오한",
  "출혈",
  "발진",
  "우울",
  "소화불량",
];

export default function PersonalRecommand({ recommandTarget = "medicine" }) {
  const [selectedCards, setSelectedCards] = useState([]);
  const handleCardSelect = (cardId) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(cardId)) {
        // If card is already selected, remove it
        return prevSelected.filter((id) => id !== cardId);
      } else {
        // If less than 4 cards are selected, add the new selection
        if (prevSelected.length < 4) {
          return [...prevSelected, cardId];
        }
        // If 4 cards are already selected, return the current selection
        return prevSelected;
      }
    });
  };

  return (
    <>
      <TopMargin />
      <CenterMain>
        <div>
          <Title>
            나의 맞춤 {recommandTarget === "nutrients" ? "영양제" : "의약품"}{" "}
            추천받기
          </Title>
          <SubTitle>본인의 건강 상태를 입력하세요</SubTitle>
          <Grey>최대 4개까지 선택할 수 있어요</Grey>
        </div>
        <GridWrapper>
          {cardKey.map((id) => (
            <Card
              key={id}
              id={id}
              caption={id}
              selected={selectedCards.includes(id)}
              onSelect={handleCardSelect}
            />
          ))}
        </GridWrapper>
        <SubmitWrapper>
          <Link to="result" state={{ select: selectedCards }}>
            <SubmitButton>Submit</SubmitButton>
          </Link>
        </SubmitWrapper>
      </CenterMain>
    </>
  );
}
