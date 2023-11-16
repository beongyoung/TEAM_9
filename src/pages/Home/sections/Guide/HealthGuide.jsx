import React from "react";
import styled from "styled-components";

const StyledOverlapGroup = styled.div`
  background-color: #f6f6f6;
  border: 1px solid;
  border-color: #cbcbcb;
  height: 420px;
  left: 370px;
  position: absolute;
  top: 1398px;
  width: 552px;

  .text-wrapper-2 {
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

  .frame-2 {
    height: 16px;
    left: 95px;
    position: absolute;
    top: 23px;
    width: 16px;
  }

  .frame-3 {
    height: 40px;
    left: 500px;
    position: absolute;
    top: 6px;
    width: 40px;
  }
`;

export const OverlapGroup = () => {
  return (
    <StyledOverlapGroup>
      <div className="text-wrapper-2">건강가이드</div>
      <img className="frame-2" alt="Frame" src="https://c.animaapp.com/ULZ0sU3D/img/frame-181.svg" />
      <img className="frame-3" alt="Frame" src="https://c.animaapp.com/ULZ0sU3D/img/frame-183.svg" />
    </StyledOverlapGroup>
  );
};