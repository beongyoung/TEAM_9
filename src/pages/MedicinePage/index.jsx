import { useState, useMemo, Suspense } from "react";
import { useLocation } from "react-router-dom";
import styles from "styled-components";
import MedicineList from "./MedicineList.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import Banner from "../../components/Banner.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import NotFound from "../../components/NotFound.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import { Title } from "../../components/paragraphs.jsx";
import { fetchAxios, getSeasonString } from "../../utils/utils.js";

const SearchHeader = styles.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function useSearchParam() {
  const location = useLocation();
  const urlSearch = new URLSearchParams(location.search);
  return urlSearch.get("query");
}

export default function MedicinePage() {
  const param = useSearchParam();
  const [query, setQuery] = useState(
    param === null ? "/api/medicine" : `/api/medicine/search/${param}`,
  );
  const resource = useMemo(() => fetchAxios(query), [query]);

  return (
    <>
      <Banner page="medicine" />
      <CenterMain>
        <SearchHeader>
          <Title>{getSeasonString()} 질병 의약품</Title>
          <SearchBar
            api="/api/medicine/search/"
            placeholder="의약품을 입력해 주세요"
            onSearch={(param) => {
              setQuery(`/api/medicine/search/${param}`);
            }}
            canBlank
          />
        </SearchHeader>
        <ErrorBoundary fallback={<NotFound />} errorKey={query}>
          <Suspense fallback={<div>Loading...</div>}>
            <MedicineList resource={resource} />
          </Suspense>
        </ErrorBoundary>
      </CenterMain>
    </>
  );
}
