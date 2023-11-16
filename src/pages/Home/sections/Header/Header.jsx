import React from "react";
import styled from "styled-components";

const OverlapGroupWrapperStyled = styled.div`
  height: 170px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1920px;

  .overlap-2 {
    background-image: url(https://c.animaapp.com/ULZ0sU3D/img/rectangle-1862.png);
    background-size: 100% 100%;
    height: 194px;
  }

  .group-2 {
    height: 30px;
    left: 491px;
    position: relative;
    top: 90px;
    width: 1061px;
  }

  .navbar {
    height: 30px;
    left: 0;
    position: absolute;
    top: 0;
    width: 865px;
  }

  .text-wrapper-7 {
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    left: 726px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 131px;
  }

  .text-wrapper-8 {
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 178px;
  }

  .text-wrapper-9 {
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    left: 242px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 178px;
  }

  .text-wrapper-10 {
    color: #000000;
    font-family: "Pretendard-Medium", Helvetica;
    font-size: 24px;
    font-weight: 500;
    left: 484px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
    width: 178px;
  }

  .text-wrapper-11 {
    color: #000000;
    font-family: "Pretendard-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 921px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 2px;
    width: 138px;
  }

  .text-wrapper-12 {
    color: var(--xwj-fsv);
    font-family: "Pretendard-ExtraBold", Helvetica;
    font-size: 10px;
    font-weight: 800;
    left: 379px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 135px;
    white-space: nowrap;
  }

  .group-3 {
    height: 81px;
    left: 379px;
    position: absolute;
    top: 67px;
    width: 71px;
  }

  .group-4 {
    height: 81px;
    position: relative;
    width: 73px;
  }

  .text-wrapper-13 {
    color: var(--xwj-fsv);
    font-family: "Pretendard-ExtraBold", Helvetica;
    font-size: 10px;
    font-weight: 800;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 69px;
    white-space: nowrap;
  }

  .group-5 {
    height: 63px;
    left: 10px;
    position: absolute;
    top: 0;
    width: 52px;
  }
`;

export const OverlapGroupWrapper = () => {
  return (
    <OverlapGroupWrapperStyled>
      <div className="overlap-group-wrapper">
        <div className="overlap-2">
          <div className="group-2">
            <div className="navbar">
              <div className="text-wrapper-7">건강 커뮤니티</div>
              <div className="text-wrapper-8">계절별 질병 치료법</div>
              <div className="text-wrapper-9">계절별 질병 의약품</div>
              <div className="text-wrapper-10">계절별 건강 가이드</div>
            </div>
            <div className="text-wrapper-11">로그인 | 회원가입</div>
          </div>
        </div>
      </div>
      <div className="text-wrapper-12">SEASON WELL</div>
      <div className="group-3">
        <div className="group-4">
          <div className="text-wrapper-13">SEASON WELL</div>
          <img className="group-5" alt="Group" src="https://c.animaapp.com/ULZ0sU3D/img/group-7516@2x.png" />
        </div>
      </div>
    </OverlapGroupWrapperStyled>
  );
};