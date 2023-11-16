import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.div`
  height: 480px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListItemCode = styled.div`
  color: white;
  font-size: 0.8em;
`;

const ListItemName = styled.div`
  width: 100%;
  height: 75px;
  background-color: #0008;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DiseaseItem({ data }) {
  return (
    <Link to={data.disease_code}>
      <ListItem>
        <ListItemCode>코드 : {data.disease_code}</ListItemCode>
        <ListItemName>{data.disease_name}</ListItemName>
      </ListItem>
    </Link>
  );
}
