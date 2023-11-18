import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CenterMain from "../../components/CenterMain";
import CommunityRules from "../../components/CommunityRules.jsx";
import styled from "styled-components";

export const ContentContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 50px;
  height: 150px;
`;

export const CommentContainer = styled.div`
  margin-bottom: 20px;
`;

export const CommentTextarea = styled.textarea`
  width: 98%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  margin-top: 30px;
  resize: none;
`;

export const CommentButton = styled.button`
  background-color: #ff6b00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
`;
const ButtonContainer = styled.div`
  margin-bottom: 100px;
  display: flex;
  justify-content: flex-end;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin-bottom: 30px; /* 선 간격 조절 */
  margin-top: 30px;
`;

const CommunityDetailPage = () => {
  const location = useLocation();
  const { post } = location.state || {};
  const { title, content, contentType, comments, keyword } = post || {};
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    // 댓글을 등록할 때, 새로운 댓글을 생성하고 해당 게시물의 comments에 추가
    const newComment = {
      id: comments.length + 1, // 간단한 방식으로 id 부여 (추후에 더 좋은 방법으로 변경 가능)
      author: "그누", // 사용자 이름 또는 id 등을 설정
      text: commentText,
    };
    const updatedComments = [...comments, newComment];

    console.log("새로운 댓글:", newComment);
    console.log("업데이트된 댓글 목록:", updatedComments);

    setCommentText("");
  };
  return (
    <CenterMain>
      <CommunityRules />
      <div>
        <h2>{title}</h2>
        <h3>{keyword}</h3>
        <ContentContainer>
          <p>{content}</p>
        </ContentContainer>
        <CommentContainer>
          <h3>댓글</h3>
          {comments.map((comment) => (
            <div key={comment.id}>
              <Line />
              <strong>{comment.author}</strong>
              <br /> {comment.text}
            </div>
          ))}
          <CommentTextarea
            placeholder="댓글을 입력하세요..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <ButtonContainer>
            <CommentButton onClick={handleCommentSubmit}>
              댓글 등록
            </CommentButton>
          </ButtonContainer>
        </CommentContainer>
      </div>
    </CenterMain>
  );
};

export default CommunityDetailPage;
