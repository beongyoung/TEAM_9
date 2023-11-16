/* eslint-disable */

import styled from "styled-components";

export const TitleSkeleton = styled.h2`
  width: 240px;
  height: 2.625rem;
  background-color: #ccc;
`;

export const SubTitleSkeleton = styled.h3`
  width: 160px;
  height: 1.875rem;
  background-color: #ccc;
`;

const PSkeletonWrapper = styled.p`
  width: 400px;
`;

const LineSkeleton = styled.span`
  display: block;
  width: ${(props) => props.width ?? 400}px;
  height: 1rem;
  margin: 0.25rem 0;
  background-color: #ccc;
`;

export const NameSkeleton = styled.p`
  width: 120px;
  height: 1.5rem;
  background-color: #ccc;
`;

export function PSkeleton() {
  return (
    <PSkeletonWrapper>
      <LineSkeleton width={380} />
      <LineSkeleton width={400} />
      <LineSkeleton width={100} />
    </PSkeletonWrapper>
  );
}
