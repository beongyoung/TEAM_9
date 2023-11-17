import Banner from "../../components/Banner.jsx";
import HealthGuideArticle from "./HealthGuideArticle.jsx";
import CenterMain from "../../components/CenterMain.jsx";
import { Title } from "../../components/paragraphs.jsx";
import { getSeasonString } from "../../utils/utils.js";

export default function HealthGuidePage({ content }) {
  const seasonString = getSeasonString();
  return (
    <>
      <Banner page="healthGuide" />
      <CenterMain>
        <Title>{seasonString}철 건강 가이드</Title>
        <HealthGuideArticle content={content} />
      </CenterMain>
    </>
  );
}
