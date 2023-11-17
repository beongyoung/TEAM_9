import styled from "styled-components";

const CenterMain = styled.main`
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  margin: 0px auto;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: ${({ $gap = 40 }) => $gap}px;
`;

export default CenterMain;
