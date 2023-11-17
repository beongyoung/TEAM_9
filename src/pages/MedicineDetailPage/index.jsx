import { useMemo, useCallback, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MedicineDetail from "./MedicineDetail.jsx";
import MedicineDetailSkeleton from "./MedicineDetailSkeleton.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import NotFound from "../../components/NotFound.jsx";
import ErrorBoundary from "../../components/ErrorBoundary.jsx";
import { fetchAxios } from "../../utils/utils.js";

function MedicineDetailMain({ medicineId }) {
  const resource = useMemo(
    () => fetchAxios(`/api/medicine/${medicineId}`),
    [medicineId],
  );
  return (
    <ErrorBoundary
      fallback={<NotFound to="/medicine" buttonText="목록으로" />}
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
      axios.get(`/api/medicine/search/${param}`).then(({ data }) => {
        if (data.length === 0) {
          console.log("찾는 게 없어요!");
          return;
        }
        navigate(`/medicine/${data[0].medicine_code}`);
      });
    },
    [navigate],
  );

  return (
    <CenterMain>
      <SearchBar
        api="/api/medicine/search/"
        placeholder="의약품을 입력해 주세요"
        onSearch={onSearch}
      />
      <MedicineDetailMain medicineId={medicineId} />
    </CenterMain>
  );
}
