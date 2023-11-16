import React from "react";
import styled from "styled-components";

const StyledGroupWrapper = styled.div`
    height: 268px;
    left: 370px;
    position: absolute;
    top: 2165px;
    width: 1179px;
`;

const Rectangle = styled.div`
    background-color: #d9d9d9;
    height: 268px;
    position: absolute;
    top: 0;
    width: 268px;

    &:nth-child(1) {
        left: 0;
    }

    &:nth-child(2) {
        left: 304px;
    }

    &:nth-child(3) {
        left: 607px;
    }

    &:nth-child(4) {
        left: 911px;
    }
`;

export const GroupWrapper = () => {
    return (
        <StyledGroupWrapper>
        <Rectangle />
        <Rectangle />
        <Rectangle />
        <Rectangle />
        </StyledGroupWrapper>
    );
};