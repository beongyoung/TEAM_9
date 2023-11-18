import { useMemo, Suspense } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NutrientRecommandItem from "./NutrientRecommandItem.jsx";
import ErrorBoundary from "@/components/ErrorBoundary.jsx";
import CenterMain from "@/components/CenterMain.jsx";
import { Title, SubTitle } from "@/components/paragraphs.jsx";
import { fetchAxios } from "@/utils/utils.js";

const TitleWrapper = styled.div`
  margin-top: 40px;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

function NutrientRecommandResult({ resource }) {
  const data = resource();
  return (
    <ResultWrapper>
      {data.map((item) => (
        <NutrientRecommandItem {...item} key={item.id} />
      ))}
    </ResultWrapper>
  );
}

export default function NutrientRecommand() {
  let { state } = useLocation();
  const resource = useMemo(() => {
    if (state.select == null) return () => [];

    const query = state.select
      .map((code, i) => `disease${i + 1}=${code}`)
      .join("&");
    const path = `/api/nutrients/personal?${query}`;
    return fetchAxios(path);
  }, [state]);

  if (state.select == null) return <div>에러</div>;

  return (
    <CenterMain>
      <TitleWrapper>
        <Title>나의 맞춤 영양제 추천받기</Title>
        <SubTitle>당신의 추천 결과</SubTitle>
      </TitleWrapper>
      <ErrorBoundary>
        <Suspense>
          <NutrientRecommandResult resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </CenterMain>
  );
}
