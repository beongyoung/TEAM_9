import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CommunityRules from "../../components/CommunityRules";
import CenterMain from "../../components/CenterMain";

const WriteForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Dropdown = styled.select`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  min-height: 20px;
`;

const Input = styled.input`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  margin-bottom: 30px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  width: 98.1%;
  resize: none;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #ff6b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
`;
const WriteButtonContainer = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-end;
`;

const WritePage = (updatePostList) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      number: 3, // 예시로 새 글의 번호를 지정합니다.
      title: event.target.elements.title.value,
      writer: "그누", // 실제로는 로그인 정보 또는 사용자 입력을 받아와야 합니다.
      views: 0, // 조회수 초기값
      date: new Date().toISOString().split("T")[0], // 글 작성일
      contentType: event.target.contentType.value,
      content: event.target.content.value,
      comments: [],
    };

    // 글 목록 갱신 함수 호출
    updatePostList(newPost);

    // 글 작성 후 mainboard로 이동
    navigate("/community/mainboard");
  };

  return (
    <>
      <CenterMain>
        <CommunityRules />
        <h3> 게시글 작성</h3>
        <WriteForm onSubmit={handleSubmit}>
          <Dropdown name="contentType">
            <option value="medicalConsultation">의료상담</option>
            <option value="medicineNutritionReview">의약품/영양제 리뷰</option>
          </Dropdown>
          <Input type="text" name="title" placeholder="제목을 입력해주세요." />
          <Input
            type="text"
            name="disease"
            placeholder="질병명을 입력해주세요."
          />
          <TextArea name="content" placeholder="내용을 입력해주세요" />
          <WriteButtonContainer>
            <SubmitButton type="submit">글쓰기</SubmitButton>
          </WriteButtonContainer>
        </WriteForm>
      </CenterMain>
    </>
  );
};

export default WritePage;
