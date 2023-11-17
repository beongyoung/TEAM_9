import { useMemo, useCallback, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NutrientDetail from "./NutrientDetail.jsx";
import NutrientDetailSkeleton from "./NutrientDetailSkeleton.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import NotFound from "../../components/NotFound.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import { fetchAxios } from "../../utils/utils.js";

function NutrientDetailMain({ nutrientId }) {
  const resource = useMemo(
    () => fetchAxios(`/api/nutrients/${nutrientId}`),
    [nutrientId],
  );
  return (
    <ErrorBoundary
      fallback={<NotFound to="../" buttonText="목록으로" />}
      errorKey={nutrientId}
    >
      <Suspense fallback={<NutrientDetailSkeleton />}>
        <NutrientDetail resource={resource} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default function NutrientDetailPage() {
  const { nutrientId } = useParams();
  const navigate = useNavigate();
  const onSearch = useCallback(
    (param) => {
      axios.get(`/api/nutrients/search/${param}`).then(({ data }) => {
        if (data.length === 0) {
          console.log("찾는 게 없어요!");
          return;
        }
        navigate(`/medicine/nutrient/${data[0].id}`);
      });
    },
    [navigate],
  );

  return (
    <CenterMain>
      <SearchBar
        api="/api/nutrients/search/"
        placeholder="영양제를 입력해 주세요"
        onSearch={onSearch}
      />
      <NutrientDetailMain nutrientId={nutrientId} />
    </CenterMain>
  );
}
