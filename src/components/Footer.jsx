import styles from "styled-components";
import logoWhite from "../assets/seasonwell-logo-white.svg";

const FooterWrapper = styles.footer`
	width: 100%;
	height: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #9D9D9D;
`;

const FooterBox = styles.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
`;

const FooterImg = styles.img`
	width: 100px;
	height: 100px;
	object-fit: contain;
`;

const P = styles.p`
	font-size: 0.8rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterBox>
        <FooterImg src={logoWhite} alt="시즌웰 로고" />
        <P>대충 푸터라는 내용. 뭐 넣으실지 디자이너분 정해주세요</P>
        <P>만든사람: 팀 시즌웰</P>
        <P>정다운 | 박병영 | 임채현 | 이근우 | 이정현 | 주현정 | 한기종</P>
      </FooterBox>
    </FooterWrapper>
  );
}
