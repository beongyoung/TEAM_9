import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import DiseasePage from "./pages/DiseasePage";
import DiseaseDetailPage from "./pages/DiseaseDetailPage";
import MedicineHubPage from "./pages/MedicineHubPage";
import MedicinePage from "./pages/MedicinePage";
import MedicineDetailPage from "./pages/MedicineDetailPage";
import NutrientPage from "./pages/NutrientPage";
import NutrientDetailPage from "./pages/NutrientDetailPage";
import HealthGuidePage from "./pages/HealthGuidePage";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home/Home.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="disease">
          <Route path=":diseaseId" element={<DiseaseDetailPage />} />
          <Route path="" element={<DiseasePage />} />
        </Route>
        <Route path="medicine">
          <Route path="" element={<MedicineHubPage />} />
          <Route path="medicine">
            <Route path=":medicineId" element={<MedicineDetailPage />} />
            <Route path="" element={<MedicinePage />} />
          </Route>
          <Route path="nutrient">
            <Route path=":nutrientId" element={<NutrientDetailPage />} />
            <Route path="" element={<NutrientPage />} />
          </Route>
        </Route>
        <Route path="healthGuide">
          <Route path="food" element={<HealthGuidePage content="food" />} />
          <Route path="living" element={<HealthGuidePage content="living" />} />
          <Route path="" element={<HealthGuidePage content="food" />} />
        </Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function App() {
  return <Router />;
}

export default App;
