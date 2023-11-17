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

const ListItemTitle = styled.h3`
  margin-bottom: 0;
`;

export default function NutrientItem({ data }) {
  return (
    <Link to={`/medicine/nutrient/${data.id}`}>
      <ListItem>
        {data.image_url ? (
          <ListItemThumb src={data.image_url} alt={data.nutrients_name} />
        ) : (
          <ListItemThumbSkeleton />
        )}
        <ListItemTitle>{data.nutrients_name}</ListItemTitle>
      </ListItem>
    </Link>
  );
}
