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
import CommunityPage from "./pages/CommunityPage";
import CommunityDetailPage from "./pages/CommunityPage/CommunityDetailPage.jsx";
import WritePage from "./pages/CommunityPage/WritePage.jsx";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage.jsx";
import LoginHandler from "./pages/auth/LoginHandler.jsx";
import PersonalRecommand from "./pages/RecommandPage/PersonalRecommand.jsx";
import MedicineRecommand from "./pages/RecommandPage/MedicineRecommand.jsx";
import NutrientRecommand from "./pages/RecommandPage/NutritionRecommand.jsx";
import Home from "./pages/Home/Home.jsx";

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/oauth" //redirect_url
          element={<LoginHandler />} //당신이 redirect_url에 맞춰 꾸밀 컴포넌트
        />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Home />} />
        </Route>
        <Route path="disease">
          <Route path=":diseaseId" element={<DiseaseDetailPage />} />
          <Route path="" element={<DiseasePage />} />
        </Route>
        <Route path="medicine">
          <Route path="" element={<MedicineHubPage />} />
          <Route path="recommand">
            <Route path="medicine">
              <Route path="result" element={<MedicineRecommand />} />
              <Route
                path=""
                element={<PersonalRecommand recommandTarget="medicine" />}
              />
            </Route>
            <Route path="nutrient">
              <Route path="result" element={<NutrientRecommand />} />
              <Route
                path=""
                element={<PersonalRecommand recommandTarget="nutrient" />}
              />
            </Route>
          </Route>
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
        <Route exact path="community">
          <Route
            path="mainboard"
            element={<CommunityPage content="mainboard" />}
          />
          <Route path="consult" element={<CommunityPage content="consult" />} />
          <Route path="review" element={<CommunityPage content="review" />} />
          <Route path="write" element={<WritePage content="write" />} />
          <Route path="consult/:postNumber" element={<CommunityDetailPage />} />
          <Route path="review/:postNumber" element={<CommunityDetailPage />} />
          <Route path="" element={<CommunityPage content="mainboard" />} />
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
