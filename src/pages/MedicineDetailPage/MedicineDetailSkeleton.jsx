import { SubTitle, Bold } from "../../components/paragraphs.jsx";
import {
  SubTitleSkeleton,
  NameSkeleton,
  PSkeleton,
} from "../../components/skeletons.jsx";

export default function MedicineDetailSkeleton() {
  return (
    <>
      <div className="summery">
        <div className="descriptions">
          <SubTitleSkeleton />
          <Bold>의약품 명</Bold>
          <NameSkeleton />
          <Bold>질병소개</Bold>
          <PSkeleton />
        </div>
      </div>
      <article>
        <section>
          <SubTitle>효능</SubTitle>
          <PSkeleton />
        </section>
        <section>
          <SubTitle>용법, 용량</SubTitle>
          <PSkeleton />
        </section>
        <section>
          <SubTitle>주의사항</SubTitle>
          <PSkeleton />
        </section>
      </article>
    </>
  );
}
