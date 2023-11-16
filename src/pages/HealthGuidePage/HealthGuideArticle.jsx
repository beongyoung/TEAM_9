import { useState } from "react";
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
  cursor: "pointer",
}));

export default function HealthGuideArticle() {
  const [tap, setTap] = useState("food");

  return (
    <>
      <ButtonContainer>
        <Button
          className="button"
          $activate={tap === "food"}
          onClick={() => setTap("food")}
        >
          식습관 가이드
        </Button>
        <Button
          className="button"
          $activate={tap === "living"}
          onClick={() => setTap("living")}
        >
          생활 수칙
        </Button>
      </ButtonContainer>
      <HealthGuideParagraph tap={tap} />
    </>
  );
}
