import styled from "styled-components";
import NutrientItem from "./NutrientItem.jsx";

const ListGrid = styled.div`
  width: 100%;
  max-width: 1180px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 262px);
  grid-gap: 44px;
  justify-content: center;
`;

export default function NutrientList({ resource }) {
  let data = resource().result; //pending backend

  return (
    <ListGrid>
      {data.map((e) => (
        <NutrientItem key={e.id} data={e} />
      ))}
    </ListGrid>
  );
}
