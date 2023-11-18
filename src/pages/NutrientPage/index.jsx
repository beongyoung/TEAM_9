import { useState, useMemo, Suspense } from "react";
import styles from "styled-components";
import NutrientList from "./NutrientList.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import Banner from "../../components/Banner.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import NotFound from "../../components/NotFound.jsx";
import { Title } from "../../components/paragraphs.jsx";
import { fetchAxios, getSeasonString } from "../../utils/utils.js";

const SearchHeader = styles.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function NutrientPage() {
  const [query, setQuery] = useState("/api/nutrients");
  const resource = useMemo(() => fetchAxios(query), [query]);

  return (
    <>
      <Banner page="medicine" />
      <CenterMain>
        <SearchHeader>
          <Title>{getSeasonString()} 질병 영양제</Title>
          <SearchBar
            api="/api/nutrients/search/"
            placeholder="영양제를 입력해 주세요"
            onSearch={(param) => {
              setQuery(`/api/nutrients/search/${param}`);
            }}
            canBlank
          />
        </SearchHeader>
        <ErrorBoundary fallback={<NotFound />} errorKey={query}>
          <Suspense fallback={<div>Loading...</div>}>
            <NutrientList resource={resource} />
          </Suspense>
        </ErrorBoundary>
      </CenterMain>
    </>
  );
}
