import { useNavigate } from "react-router-dom";
import MedicineList from "./MedicineList.jsx";
import NutrientList from "./NutrientList.jsx";
import Banner from "../../components/Banner.jsx";
import SearchBar from "../../components/SearchBar.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import RecommandSection from "../../components/RecommandSection.jsx";

export default function MedicineHubPage() {
  const navigate = useNavigate();

  return (
    <>
      <Banner page="medicine" />
      <CenterMain>
        <RecommandSection />
        <SearchBar
          api="/api/medicine/search/"
          placeholder="의약품을 입력해 주세요"
          onSearch={(param) => {
            navigate(`/medicine/medicine/?query=${param}`);
          }}
        />
        <MedicineList />
        <NutrientList />
      </CenterMain>
    </>
  );
}
