import { useMemo, useCallback, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MedicineDetail from "./MedicineDetail.jsx";
import MedicineDetailSkeleton from "./MedicineDetailSkeleton.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import { fetchAxios } from "../../utils/utils.js";

function MedicineDetailMain({ medicineId }) {
  const resource = useMemo(
    () => fetchAxios(`/api/medicine/${medicineId}`),
    [medicineId],
  );
  return (
    <ErrorBoundary
      fallback={<div>페이지를 찾을 수 없음</div>}
      errorKey={medicineId}
    >
      <Suspense fallback={<MedicineDetailSkeleton />}>
        <MedicineDetail resource={resource} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default function MedicineDetailPage() {
  const { medicineId } = useParams();
  const navigate = useNavigate();
  const onSearch = useCallback(
    (param) => {
      axios.get(`/api/search/medicine/${param}`).then(({ data }) => {
        if (data.length === 0) {
          console.log("찾는 게 없어요!");
          return;
        }
        console.log(data[0].disease_code);
        navigate(`/medicine/${data[0].disease_code}`);
      });
    },
    [navigate],
  );

  return (
    <CenterMain>
      <SearchBar
        api="/api/search/medicine"
        placeholder="의약품을 입력해 주세요"
        onSearch={onSearch}
      />
      <MedicineDetailMain medicineId={medicineId} />
    </CenterMain>
  );
}
