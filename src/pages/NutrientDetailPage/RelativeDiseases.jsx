import { Link } from "react-router-dom";
//import styled from "styled-components";

export default function RelativeDiseases({ data }) {
  //pending backend
  return <Link to={`/disease/${data.disease_code}`}>{data.disease_name}</Link>;
}

// const P = styled.p`
//   display: flex;
//   gap: 20px;
//   flex-wrap: wrap;
//   font-size: 0.875rem;
//   font-weight: 600;
//   color: black;
//   a {
//     position: relative;
//   }
//   a:not(:first-child)::before {
//     content: "|";
//     position: absolute;
//     left: -12px;
//     pointer-events: none;
//   }
// `;

// export default function RelativeDiseases({ data }) {
//   return (
//     <P>
//       {data.map(({ code, name }) => (
//         <Link to={`/disease/${code}`} key={code}>
//           {name}
//         </Link>
//       ))}
//     </P>
//   );
// }
