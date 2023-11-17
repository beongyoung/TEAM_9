import { Paragraph } from "../../components/paragraphs.jsx";
import { getSeasonCode } from "../../utils/utils.js";
import guideData from "../../data/guideData.json";

export default function HealthGuideParagraph({ tap }) {
  const rawData = guideData[getSeasonCode()][tap];
  const paragraphs = rawData
    .split("\n")
    .map((line, i) => (
      <Paragraph key={line.substring(0, 5) + "_" + i}>{line}</Paragraph>
    ));

  return <article>{paragraphs}</article>;
}
