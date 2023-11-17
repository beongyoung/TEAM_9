import styled from "styled-components";
import { Link } from "react-router-dom";
import notFound from "../assets/notFoundIllust.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 640px;
  height: 420px;
  @media (max-width: 767px) {
    width: 320px;
    height: 210px;
  }
`;

const Text = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 700;
`;

const Button = styled.div`
  width: 120px;
  height: 50px;
  background-color: #ff6b00;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export default function NotFoundBanner({
  to = "/",
  buttonText = "메인으로",
} = {}) {
  return (
    <Container>
      <Image src={notFound} alt="404-not-found" />
      <Text>404 Not Found!</Text>
      <Link to={to}>
        <Button>{buttonText}</Button>
      </Link>
    </Container>
  );
}
