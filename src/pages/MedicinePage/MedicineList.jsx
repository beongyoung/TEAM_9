import styled from "styled-components";
import MedicineItem from "./MedicineItem.jsx";

const ListGrid = styled.div`
  width: 100%;
  max-width: 1180px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 262px);
  grid-gap: 44px;
  justify-content: center;
`;

export default function MedicineList({ resource }) {
  let data = resource();
  if (data.medicine_list) data = data.medicine_list;

  return (
    <ListGrid>
      {data.map((e) => (
        <MedicineItem key={e.medicine_code} data={e} />
      ))}
    </ListGrid>
  );
}
