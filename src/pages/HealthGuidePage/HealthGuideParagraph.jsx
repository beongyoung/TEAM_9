import { getSeasonCode } from "../../utils/utils.js";
import guideData from "../../data/guideData.json";

export default function HealthGuideParagraph({ tap }) {
  const rawData = guideData[getSeasonCode()][tap];
  const paragraphs = rawData
    .split("\n")
    .map((line, i) => <p key={line.substring(0, 5) + "_" + i}>{line}</p>);

  return <article>{paragraphs}</article>;
}
