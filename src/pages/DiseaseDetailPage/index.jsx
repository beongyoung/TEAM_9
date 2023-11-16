import { useMemo, useCallback, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DiseaseDetail from "./DiseaseDetail.jsx";
import DiseaseDetailSkeleton from "./DiseaseDetailSkeleton.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import { fetchAxios } from "../../utils/utils.js";

function DiseaseDetailMain({ diseaseId }) {
  const resource = useMemo(
    () => fetchAxios(`/api/disease/${diseaseId}`),
    [diseaseId],
  );
  return (
    <ErrorBoundary
      fallback={<div>페이지를 찾을 수 없음</div>}
      errorKey={diseaseId}
    >
      <Suspense fallback={<DiseaseDetailSkeleton />}>
        <DiseaseDetail resource={resource} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default function DiseaseDetailPage() {
  const { diseaseId } = useParams();
  const navigate = useNavigate();
  const onSearch = useCallback(
    (param) => {
      axios.get(`/api/disease/search/${param}`).then(({ data }) => {
        if (data.length === 0) {
          console.log("찾는 게 없어요!");
          return;
        }
        navigate(`/disease/${data[0].disease_code}`);
      });
    },
    [navigate],
  );

  return (
    <CenterMain>
      <SearchBar
        api="/api/search/disease"
        placeholder="질병을 입력해 주세요"
        onSearch={onSearch}
      />
      <DiseaseDetailMain diseaseId={diseaseId} />
    </CenterMain>
  );
}
