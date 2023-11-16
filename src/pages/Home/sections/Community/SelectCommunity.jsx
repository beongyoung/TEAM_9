import React from "react";
import styled from "styled-components";

const StyledFrameWrapper = styled.div`
    height: 56px;
    left: 370px;
    position: absolute;
    top: 2629px;
    width: 234px;

    .frame-6 {
        align-items: flex-start;
        display: inline-flex;
        gap: 28px;
        position: relative;
    }

    .div-wrapper {
        align-items: flex-start;
        background-color: #ff6b00;
        border-radius: 32px;
        display: inline-flex;
        flex: 0 0 auto;
        gap: 10px;
        padding: 16px 24px;
        position: relative;
    }

    .text-wrapper-5 {
        color: #ffffff;
        font-family: "Pretendard-Medium", Helvetica;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: normal;
        margin-top: -2px;
        position: relative;
        text-align: center;
        white-space: nowrap;
        width: fit-content;
    }

    .frame-7 {
        align-items: flex-start;
        border: 2px solid;
        border-color: var(--xwj-fsv);
        border-radius: 32px;
        display: inline-flex;
        flex: 0 0 auto;
        gap: 10px;
        padding: 16px 24px;
        position: relative;
    }

    .text-wrapper-6 {
        color: #000000;
        font-family: "Pretendard-Medium", Helvetica;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: normal;
        margin-top: -2px;
        position: relative;
        text-align: center;
        white-space: nowrap;
        width: fit-content;
    }
`;

export const FrameWrapper = () => {
    return (
        <StyledFrameWrapper>
        <div className="frame-6">
            <div className="div-wrapper">
                <div className="text-wrapper-5">의료 상담</div>
            </div>
                <div className="frame-7">
            <div className="text-wrapper-6">리뷰</div>
            </div>
        </div>
        </StyledFrameWrapper>
    );
};