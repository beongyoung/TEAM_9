import { useMemo, Suspense } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CommunityPreviewArticle from "./CommunityPreviewArticle.jsx";
import CommunityPreviewSkeleton from "./CommunityPreviewSkeleton.jsx";
import ErrorBoundary from "@/components/ErrorBoundary.jsx";
import { fetchAxios } from "@/utils/utils.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function CommunityPreviewListRenderer({ resource }) {
  const boardList = resource();
  return (
    <Wrapper>
      {boardList.map(({ board_no, board_title, board_content }) => {
        return (
          <Link to={`/community/${board_no}`} key={board_no}>
            <CommunityPreviewArticle
              title={board_title}
              content={board_content}
            />
          </Link>
        );
      })}
    </Wrapper>
  );
}

export default function CommunityPreviewList({ query }) {
  const resource = useMemo(
    () => fetchAxios(`/api/community/representation/${query}`),
    [query],
  );

  return (
    <ErrorBoundary fallback={<div>Error!</div>} errorKey={query}>
      <Suspense fallback={<CommunityPreviewSkeleton />}>
        <CommunityPreviewListRenderer resource={resource} />
      </Suspense>
    </ErrorBoundary>
  );
}
