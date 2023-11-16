import React from "react";
import styled from "styled-components";

const StyledGroup = styled.div`
    height: 209px;
    left: 0;
    position: absolute;
    top: 3785px;
    width: 1922px;

    .overlap-group-2 {
        background-color: #9d9d9d;
        height: 209px;
        position: relative;
        width: 1920px;
    }

    .rectangle-2,
    .rectangle-3,
    .rectangle-4,
    .rectangle-5,
    .rectangle-6,
    .rectangle-7,
    .rectangle-8,
    .rectangle-9,
    .rectangle-10 {
        background-color: #d9d9d9;
        position: absolute;
    }

    .rectangle-2,
    .rectangle-3,
    .rectangle-4,
    .rectangle-5 {
        height: 49px;
        width: 184px;
    }

    .rectangle-2 {
        left: 623px;
        top: 56px;
    }

    .rectangle-3 {
        left: 887px;
        top: 56px;
    }

    .rectangle-4 {
        left: 1151px;
        top: 56px;
    }

    .rectangle-5 {
        left: 1416px;
        top: 59px;
    }

    .rectangle-6 {
        height: 76px;
        left: 209px;
        top: 56px;
        width: 249px;
    }

    .rectangle-7,
    .rectangle-8,
    .rectangle-9,
    .rectangle-10 {
        height: 19px;
        width: 211px;
    }

    .rectangle-7 {
        left: 622px;
        top: 132px;
    }

    .rectangle-8 {
        left: 886px;
        top: 132px;
    }

    .rectangle-9 {
        left: 1150px;
        top: 132px;
    }

    .rectangle-10 {
        left: 1415px;
        top: 135px;
    }

    .text-wrapper-4 {
        color: #ff6b00;
        font-family: "Inter", Helvetica;
        font-size: 40px;
        font-weight: 400;
        left: 47px;
        letter-spacing: 0;
        line-height: normal;
        position: absolute;
        top: 30px;
        width: 129px;
    }
`;

export const Group = () => {
    return (
        <StyledGroup className="group">
        <div className="overlap-group-2">
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="rectangle-10" />
            <div className="text-wrapper-4">footer</div>
        </div>
        </StyledGroup>
    );
};