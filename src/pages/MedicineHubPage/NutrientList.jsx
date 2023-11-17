import { Link } from "react-router-dom";
import HubList from "./HubList.jsx";
import { Section, TitleWrapper, More } from "./styles.jsx";
import NutrientItem from "../NutrientPage/NutrientItem.jsx";
import { Title } from "../../components/paragraphs.jsx";
import { getSeasonString } from "../../utils/utils.js";

export default function MedicineList() {
  return (
    <Section>
      <TitleWrapper>
        <Title>{getSeasonString()} 질병 영양제</Title>
        <Link to="/medicine/nutrient">
          <More>더보기</More>
        </Link>
      </TitleWrapper>
      <HubList
        api="/api/nutrients/representation"
        mapper={(item) => <NutrientItem key={item.id} data={item} />}
      />
    </Section>
  );
}
