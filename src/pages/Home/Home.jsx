import React from "react";
import styled from "styled-components";
import { FrameWrapper } from "./sections/Community/SelectCommunity";
import { Group } from "./sections/Footer/Footer";
import { GroupWrapper } from "./sections/Footer/FooterWrapper";
import { Overlap } from "./sections/Main";
import { OverlapGroup } from "./sections/Guide/HealthGuide";
import { OverlapGroupWrapper } from "./sections/Header/Header";
import { OverlapWrapper } from "./sections/Guide/LifeGuide";

const StyledMain = styled.div`
    background-color: #ffffff;
    height: 3994px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1920px;

    .rectangle-15 {
        background-color: #d9d9d957;
        height: 280px;
        left: 370px;
        position: absolute;
        top: 1058px;
        width: 1180px;
    }

    .line {
        height: 2px;
        left: 1920px;
        position: absolute;
        top: 1921px;
        width: 1px; 
    }

    .p {
        color: #000000;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 20px;
        font-weight: 700;
        left: 370px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 988px;
        white-space: nowrap;
    }

    .rectangle-16 {
        background-color: #f6f6f6;
        border: 1px solid;
        border-color: #cbcbcb;
        height: 119px;
        left: 370px;
        position: absolute;
        top: 2010px;
        width: 1180px;
    }

    .text-wrapper-14 {
        color: #000000;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 20px;
        font-weight: 700;
        left: 370px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 1949px;
        white-space: nowrap;
    }

    .text-wrapper-15 {
        color: #828181;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 16px;
        font-weight: 700;
        left: 1507px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        text-align: center;
        top: 1954px;
        white-space: nowrap;
    }

    .box {
        background-color: #f6f6f6;
        height: 200px;
        left: 370px;
        position: absolute;
        top: 2725px;
        width: 1180px;
    }

    .text-wrapper-16 {
        color: #000000;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 20px;
        font-weight: 700;
        left: 370px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 2564px;
        white-space: nowrap;
    }

    .text-wrapper-17 {
        color: #828181;
        font-family: "Pretendard-Bold", Helvetica;
        font-size: 16px;
        font-weight: 700;
        left: 1507px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        text-align: center;
        top: 2564px;
        white-space: nowrap;
    }

    .vector {
        height: 18px;
        left: -17323px;
        position: absolute;
        top: 13610px;
        width: 18px;
    }

    .vector-2 {
        height: 18px;
        left: -16695px;
        position: absolute;
        top: 13610px;
        width: 18px;
    }
`;

export const Home = () => {
    return (
        <StyledMain>
            <Overlap />
            <div className="rectangle-15" />
            <OverlapGroup />
            <OverlapWrapper />
            <Group />
            <img className="line" alt="Line" src="https://c.animaapp.com/ULZ0sU3D/img/line-95.svg" />
            <p className="p">현재 계절에 많이 발생하는 질병</p>
            <div className="rectangle-16" />
            <GroupWrapper />
            <div className="text-wrapper-14">의약품 추천</div>
            <div className="text-wrapper-15">더보기</div>
            <div className="box"/>
            <div className="text-wrapper-16">커뮤니티</div>
            <FrameWrapper />
            <div className="text-wrapper-17">더보기</div>
            <img className="vector" alt="Vector" src="https://c.animaapp.com/ULZ0sU3D/img/vector-1@2x.png" />
            <img className="vector-2" alt="Vector" src="https://c.animaapp.com/ULZ0sU3D/img/vector-1@2x.png" />
            <OverlapGroupWrapper />
        </StyledMain>
    );
};