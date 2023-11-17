import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ListItemImage = styled.img`
  width: 100%;
  height: 400px;
  background-color: #d9d9d9;
  object-fit: cover;
`;

const ListItemName = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: black;
`;

export default function DiseaseItem({ data }) {
  return (
    <Link to={data.disease_code}>
      <ListItem>
        <ListItemImage src={data.disease_image} alt={data.disease_name} />
        <ListItemName>{data.disease_name}</ListItemName>
      </ListItem>
    </Link>
  );
}
