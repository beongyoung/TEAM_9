import { Link } from "react-router-dom";
import styled from "styled-components";

const P = styled.p`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 0.875rem;
  font-weight: 600;
  color: black;
  a {
    position: relative;
  }
  a:not(:first-child)::before {
    content: "|";
    position: absolute;
    left: -12px;
    pointer-events: none;
  }
`;

export default function DiseaseMedicine({ data }) {
  if (data === null || data.length === 0) return <P>없음</P>;
  return (
    <P>
      {data.map(({ medicine_code, medicine_name }) => (
        <Link to={`/medicine/medicine/${medicine_code}`} key={medicine_code}>
          {medicine_name}
        </Link>
      ))}
    </P>
  );
}
