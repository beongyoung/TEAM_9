import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledOverlap = styled.div`
  height: 720px;
  width: 100%;
  position: relative;

  .unsplash-ym {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .rectangle {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .wrapper {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0px auto;
    padding: 0px 20px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    box-sizing: border-box;
    gap: 70px;
  }

  .text-wrapper {
    color: #ffffff;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 70px;
  }

  .frame {
    align-items: center;
    background-color: #ff6b00;
    display: flex;
    gap: 10px;
    height: 52px;
    justify-content: center;
    padding: 12px;
    width: 196px;
  }

  .div {
    color: #ffffff;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

function MainBanner() {
  return (
    <StyledOverlap>
      <img
        className="unsplash-ym"
        alt="Unsplash ym"
        src="https://c.animaapp.com/ULZ0sU3D/img/unsplash-0vw4inac-ym.png"
      />
      <div className="rectangle" />
      <div className="wrapper">
        <div className="text-wrapper">
          식습관 가이드 <br />
          알아보고 싶다면?
        </div>
        <div className="frame">
          <div className="div">
            <Link to="/healthGuide">
              <span>더 알아보기</span>
            </Link>
          </div>
        </div>
      </div>
    </StyledOverlap>
  );
}

export default MainBanner;
