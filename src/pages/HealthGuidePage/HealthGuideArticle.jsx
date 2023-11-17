import { Link } from "react-router-dom";
import styles from "styled-components";
import HealthGuideParagraph from "./HealthGuideParagraph.jsx";

const ButtonContainer = styles.div`
  display: flex;
  gap: 28px;
`;

const Button = styles.span(({ $activate = false } = {}) => ({
  display: "inline-block",
  height: "60px",
  padding: "16px 24px",
  boxSizing: "border-box",
  border: $activate ? "none" : "2px solid #FF6B00",
  borderRadius: "32px",
  backgroundColor: $activate ? "#FF6B00" : "white",
  color: $activate ? "white" : "black",
  cursor: "pointer",
}));

export default function HealthGuideArticle({ content }) {
  return (
    <>
      <ButtonContainer>
        <Link to="/healthGuide/food">
          <Button className="button" $activate={content === "food"}>
            식습관 가이드
          </Button>
        </Link>
        <Link to="/healthGuide/living">
          <Button className="button" $activate={content === "living"}>
            생활 수칙
          </Button>
        </Link>
      </ButtonContainer>
      <HealthGuideParagraph tap={content} />
    </>
  );
}
