import styled from "styled-components";
import NotFound from "../../components/NotFound.jsx";

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <NotFound />
    </Container>
  );
}
