import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Column = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

const Caption = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

function TableItem({ icon, caption }) {
  return (
    <Column>
      <Icon src={icon} alt={caption} />
      <Caption>{caption}</Caption>
    </Column>
  );
}

export default function DiseaseProtectTable({ data }) {
  if (data === null || data.length === 0) return null;

  return (
    <Container>
      {data.map(({ prevention_image, prevention_text }) => (
        <TableItem
          icon={prevention_image}
          caption={prevention_text}
          key={prevention_text}
        />
      ))}
    </Container>
  );
}
