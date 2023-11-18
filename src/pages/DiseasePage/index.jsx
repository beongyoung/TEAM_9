import { useState, useMemo, Suspense } from "react";
import styles from "styled-components";
import DiseaseList from "./DiseaseList.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import Banner from "../../components/Banner.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import NotFound from "../../components/NotFound.jsx";
import { Title } from "../../components/paragraphs.jsx";
import {
  fetchAxios,
  getSeasonCode,
  getSeasonString,
} from "../../utils/utils.js";

const SearchHeader = styles.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function DiseasePage() {
  const [query, setQuery] = useState(`/api/disease/season/${getSeasonCode()}`);
  const resource = useMemo(() => fetchAxios(query), [query]);

  return (
    <>
      <Banner page="disease" />
      <CenterMain>
        <SearchHeader>
          <Title>{getSeasonString()} 질병 치료법</Title>
          <SearchBar
            api="/api/disease/search/"
            placeholder="질병을 입력해 주세요"
            onSearch={(param) => {
              setQuery(`/api/disease/search/${param}`);
            }}
            canBlank
          />
        </SearchHeader>
        <ErrorBoundary fallback={<NotFound />} errorKey={query}>
          <Suspense fallback={<div>Loading...</div>}>
            <DiseaseList resource={resource} />
          </Suspense>
        </ErrorBoundary>
      </CenterMain>
    </>
  );
}
