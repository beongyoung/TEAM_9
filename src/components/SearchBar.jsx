import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/searchIcon.svg";

const Form = styled.form`
  width: 100%;
  height: 80px;
  position: relative;
`;

const TextInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: 2px solid #ff6b00;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 30px;
  font-family: Pretendard;
  font-size: 1.2rem;
`;

const SubmitButton = styled.div`
  position: absolute;
  right: 30px;
  top: 24px;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  transition: transform 0.2s;
  &::after {
    content: url(${SearchIcon});
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1);
  }
`;

export default function SearchBar({
  onSearch,
  placeholder = "",
  canBlank = false,
}) {
  const [query, setQuery] = useState("");
  const onSubmit = () => {
    if (!canBlank && query === "") return;
    onSearch(query);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <TextInput
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SubmitButton onClick={onSubmit} />
      <input type="submit" hidden />
    </Form>
  );
}
