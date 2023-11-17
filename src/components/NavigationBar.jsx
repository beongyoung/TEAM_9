import { Link, useLocation } from "react-router-dom";
import styles from "styled-components";
import logo from "../assets/seasonwell-logo.svg";

const NavWrapper = styles.nav`
	position: relative;
	z-index: 25;
	width: 100%;
	height: 120px;
  padding: 0px 20px;
  box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

const Nav = styles.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavItem = styles.div`
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ $active }) => ($active ? "#ff6f00" : "#000000")};
	&:hover {
		font-weight: 700;
	}
`;

const LogoImg = styles.img`
	width: 75px;
	height: 75px;
	object-fit: contain;
`;

const LoginWrapper = styles.div`
	display: flex;
    gap: 5px;
    color: #000000;
`;

export default function NavigationBar() {
  const location = useLocation();
  const firstPathReg = /\/([^/]+)/.exec(location.pathname);
  const firstPath = firstPathReg === null ? null : firstPathReg[1];

  return (
    <NavWrapper>
      <Nav>
        <Link to="/">
          <LogoImg src={logo} alt="시즌웰 로고" />
        </Link>
        <Link to="/disease">
          <NavItem $active={firstPath === "disease"}>
            계절별 질병 치료법
          </NavItem>
        </Link>
        <Link to="/medicine">
          <NavItem $active={firstPath === "medicine"}>
            계절별 질병 의약품
          </NavItem>
        </Link>
        <Link to="/healthGuide">
          <NavItem $active={firstPath === "healthGuide"}>
            계절별 건강 가이드
          </NavItem>
        </Link>
        <Link to="/community">
          <NavItem $active={firstPath === "community"}>건강 커뮤니티</NavItem>
        </Link>
        <LoginWrapper>
          <div>로그인</div>|<div>회원가입</div>
        </LoginWrapper>
      </Nav>
    </NavWrapper>
  );
}
