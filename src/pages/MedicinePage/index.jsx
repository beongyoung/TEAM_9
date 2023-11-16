import { useState, useMemo, Suspense } from "react";
import styles from "styled-components";
import MedicineList from "./MedicineList.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import Banner from "../../components/Banner.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import { Title } from "../../components/paragraphs.jsx";
import { fetchAxios } from "../../utils/utils.js";

const SearchHeader = styles.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function DiseasePage() {
  const [query, setQuery] = useState("/api/medicine");
  const resource = useMemo(() => fetchAxios(query), [query]);

  return (
    <>
      <Banner page="medicine" />
      <CenterMain>
        <SearchHeader>
          <Title>가을 질병 의약품</Title>
          <SearchBar
            api="/api/medicine/search/"
            placeholder="의약품을 입력해 주세요"
            onSearch={(param) => {
              setQuery(`/api/medicine/search/${param}`);
            }}
            canBlank
          />
        </SearchHeader>
        <ErrorBoundary fallback={<div>Error!</div>} errorKey={query}>
          <Suspense fallback={<div>Loading...</div>}>
            <MedicineList resource={resource} />
          </Suspense>
        </ErrorBoundary>
      </CenterMain>
    </>
  );
}
