import { Link } from "react-router-dom";
import HubList from "./HubList.jsx";
import { Section, TitleWrapper, More } from "./styles.jsx";
import MedicineItem from "../MedicinePage/MedicineItem.jsx";
import { Title } from "../../components/paragraphs.jsx";
import { getSeasonString } from "../../utils/utils.js";

export default function MedicineList() {
  return (
    <Section>
      <TitleWrapper>
        <Title>{getSeasonString()} 질병 의약품</Title>
        <Link to="/medicine/medicine">
          <More>더보기</More>
        </Link>
      </TitleWrapper>
      <HubList
        api="/api/medicine/representation"
        mapper={(item) => <MedicineItem key={item.medicine_code} data={item} />}
      />
    </Section>
  );
}
