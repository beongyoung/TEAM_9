import { useMemo, Suspense } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MedicineRecommandItem from "./MedicineRecommandItem.jsx";
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

function MedicineRecommandResult({ resource }) {
  const data = resource();
  return (
    <ResultWrapper>
      {data.map((item) => (
        <MedicineRecommandItem {...item} key={item.medicine_code} />
      ))}
    </ResultWrapper>
  );
}

export default function MedicineRecommand() {
  let { state } = useLocation();
  const resource = useMemo(() => {
    if (state.select == null) return () => [];

    const query = state.select
      .map((code, i) => `disease${i + 1}=${code}`)
      .join("&");
    const path = `/api/medicine/personal?${query}`;
    return fetchAxios(path);
  }, [state]);

  if (state.select == null) return <div>에러</div>;

  return (
    <CenterMain>
      <TitleWrapper>
        <Title>나의 맞춤 의약품 추천받기</Title>
        <SubTitle>당신의 추천 결과</SubTitle>
      </TitleWrapper>
      <ErrorBoundary>
        <Suspense>
          <MedicineRecommandResult resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </CenterMain>
  );
}
