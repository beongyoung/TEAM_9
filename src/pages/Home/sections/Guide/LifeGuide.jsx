import React from "react";
import styled from "styled-components";

const StyledOverlapWrapper = styled.div`
  background-color: #f6f6f6;
  border: 1px solid;
  border-color: #cbcbcb;
  height: 420px;
  left: 998px;
  position: absolute;
  top: 1398px;
  width: 552px;

  .text-wrapper-3 {
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 16px;
    font-weight: 500;
    left: 21px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 21px;
    white-space: nowrap;
  }

  .frame-4 {
    height: 16px;
    left: 122px;
    position: absolute;
    top: 23px;
    width: 16px;
  }

  .frame-5 {
    height: 40px;
    left: 497px;
    position: absolute;
    top: 6px;
    width: 40px;
  }
`;

export const OverlapWrapper = () => {
  return (
    <StyledOverlapWrapper>
      <div className="text-wrapper-3">생활수칙가이드</div>
      <img className="frame-4" alt="Frame" src="https://c.animaapp.com/ULZ0sU3D/img/frame-181.svg" />
      <img className="frame-5" alt="Frame" src="https://c.animaapp.com/ULZ0sU3D/img/frame-184.svg" />
    </StyledOverlapWrapper>
  );
};