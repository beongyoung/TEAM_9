import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/CommunityBar.jsx";
import { postList } from "./dummyData.js";

const BoardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  flex-direction: column;
  margin-bottom: 150px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 30px;
  cursor: auto;
`;

const PostRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Number = styled.div`
  flex: 1;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const BoardTitle = styled.div`
  flex: 2;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Keyword = styled.div`
  flex: 2;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Writer = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
`;

const Views = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
`;

const Date = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 10px;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;
const WriteButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end; /* 우측으로 정렬 */
`;
const WriteButton = styled.button`
  // background-color: #gray;
  // color: black;
  background-color: #ff6b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
`;

const CommunityBoard = ({ tap }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가
  
  const filteredPostList =
    tap && tap !== "mainboard"
      ? postList.filter((post) => post.contentType === tap)
      : postList;

  const searchedPostList = filteredPostList.filter((post) =>
    post.title.includes(searchTerm),
  );
  const handlePostClick = (post) => {
    const path = `/community/${post.contentType}/${post.number}`;
    navigate(path, { state: { post } });
  };

  const handleWriteButtonClick = () => {
    navigate("/community/write");
  };

  const handleSearch = (param) => {
    // 검색어 업데이트
    setSearchTerm(param);

    // 여기에서 추가적인 검색 로직을 수행할 수 있음
  };
  return (
    <>
      <SearchBar
        api="/api/community/search/"
        placeholder="검색어를 입력해 주세요"
        // onSearch={(param) => {}}
        onSearch={handleSearch} // 검색어 입력 핸들러 연결
        canBlank
      />
      <BoardContainer>
        <TitleRow>
          <Number>번호</Number>
          <BoardTitle>제목</BoardTitle>
          <Writer>작성자</Writer>
          <Views>조회수</Views>
          <Date>등록일</Date>
        </TitleRow>
        {/* {filteredPostList.map((post) => ( */}
        {searchedPostList.map((post) => (
          <PostRow key={post.number} onClick={() => handlePostClick(post)}>
            <Number>{post.number}</Number>
            <BoardTitle>{post.title}</BoardTitle>
            <Writer>{post.writer}</Writer>
            <Views>{post.views}</Views>
            <Date>{post.date}</Date>
            <Line />
          </PostRow>
        ))}
        {/* 여백 */}
        {/* {[...Array(Math.max(10 - postList.length, 0))].map((_, index) => ( */}
        {[...Array(Math.max(10 - searchedPostList.length, 0))].map(
          (_, index) => (
            <PostRow key={`empty-${index}`}>
              {/* <Number>{postList.length + index + 1}</Number> */}
              <Number>{searchedPostList.length + index + 1}</Number>
              <BoardTitle />
              <Writer />
              <Views />
              <Date />
              <Line />
            </PostRow>
          ),
        )}
        <WriteButtonContainer>
          <WriteButton onClick={handleWriteButtonClick}>글쓰기</WriteButton>
        </WriteButtonContainer>
      </BoardContainer>
    </>
  );
};

export default CommunityBoard;
