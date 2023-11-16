import React from "react";
import styled from "styled-components";

const StyledOverlap = styled.div`
  height: 720px;
  left: 0;
  position: absolute;
  top: 170px;
  width: 1921px;

  .unsplash-ym {
    height: 720px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 1920px;
  }

  .rectangle {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
    height: 720px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1920px;
  }

  .arrow {
    height: 15px;
    left: 1920px;
    position: absolute;
    top: 175px;
    width: 1px;
  }

  .img {
    height: 15px;
    left: 1920px;
    position: absolute;
    top: 174px;
    width: 1px;
  }

  .text-wrapper {
    color: #ffffff;
    font-family: "Pretendard-Bold", Helvetica;
    font-size: 50px;
    font-weight: 700;
    left: 370px;
    letter-spacing: 0;
    line-height: 70px;
    position: absolute;
    top: 268px;
  }

  .frame {
    align-items: center;
    background-color: #ff6b00;
    display: flex;
    gap: 10px;
    height: 52px;
    justify-content: center;
    left: 370px;
    padding: 12px;
    position: absolute;
    top: 469px;
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

export const Overlap = () => {
  return (
    <StyledOverlap>
      <img
        className="unsplash-ym"
        alt="Unsplash ym"
        src="https://c.animaapp.com/ULZ0sU3D/img/unsplash-0vw4inac-ym.png"
      />
      <div className="rectangle" />
      <img className="arrow" alt="Arrow" src="https://c.animaapp.com/ULZ0sU3D/img/arrow-1.svg" />
      <img className="img" alt="Arrow" src="https://c.animaapp.com/ULZ0sU3D/img/arrow-2.svg" />
      <div className="text-wrapper">
        식습관 가이드 <br />
        알아보고 싶다면?
      </div>
      <div className="frame">
        <div className="div">알아보러가기</div>
      </div>
    </StyledOverlap>
  );
};