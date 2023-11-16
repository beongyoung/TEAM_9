import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const ListItemThumb = styled.img`
  width: 262px;
  height: 262px;
  background-color: #d9d9d9;
  object-fit: cover;
`;

const ListItemThumbSkeleton = styled.div`
  width: 262px;
  height: 262px;
  background-color: #d9d9d9;
`;

const ListItemMedicine = styled.h3`
  margin-bottom: 0;
`;

const ListItemName = styled.p``;

export default function MedicineItem({ data }) {
  return (
    <Link to={data.medicine_code}>
      <ListItem>
        {data.medicine_image ? (
          <ListItemThumb src={data.medicine_image} alt={data.medicine_name} />
        ) : (
          <ListItemThumbSkeleton />
        )}
        <ListItemMedicine>{data.medicine_name}</ListItemMedicine>
        <ListItemName>{data.disease_name}</ListItemName>
      </ListItem>
    </Link>
  );
}
