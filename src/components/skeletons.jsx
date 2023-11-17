/* eslint-disable */

import styled from "styled-components";

export const TitleSkeleton = styled.h2`
  width: 240px;
  height: 2.625rem;
  font-size: 1.75rem;
  background-color: #ccc;
  margin: 0.25rem 0;
`;

export const SubTitleSkeleton = styled.h3`
  width: 160px;
  height: 1.8rem;
  font-size: 1.2rem;
  background-color: #ccc;
`;

const PSkeletonWrapper = styled.p`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

const LineSkeleton = styled.span`
  display: block;
  width: ${(props) => props.width ?? 400}px;
  height: 0.875rem;
  margin: 0.5rem 0;
  font-size: 0.875rem;
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
