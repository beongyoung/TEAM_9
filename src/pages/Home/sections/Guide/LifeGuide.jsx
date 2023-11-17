import GuideStyle from "./GuideStyle.jsx";
import { Bold } from "../../../../components/paragraphs.jsx";

export default function LifeGuide() {
  return (
    <GuideStyle>
      <div className="titleWrapper">
        <Bold className="title">생활수칙가이드</Bold>
        <img
          alt="Frame"
          src="https://c.animaapp.com/ULZ0sU3D/img/frame-181.svg"
        />
      </div>
      <img
        className="icon"
        alt="Frame"
        src="https://c.animaapp.com/ULZ0sU3D/img/frame-184.svg"
      />
      <p className="paragraph">대충 내용. 여기다 데이터 렌더링하세요.</p>
    </GuideStyle>
  );
}
