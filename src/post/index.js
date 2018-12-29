import React from 'react';
import styled from 'styled-components';

const Score = styled.span`
  font-size: 12px;
  color: rgb(128, 128, 128);
  padding-left: 10px;
`;

const Count = styled.span`
  font-size: 13px;
  padding-right: 10px;
  cursor: pointer;
`;

const PostWrapper = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(230, 230, 230);
  background-color: ${({ currentPost }) =>
    currentPost ? 'rgb(214, 214, 205)' : 'inherit'};
`;

const LeftPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  padding-left: 10px;
  font-size: 12px;
  cursor: pointer;
  color: ${({ visited }) => (visited ? 'rgb(128, 128, 128)' : 'black')};
`;

const Post = ({
  id,
  score,
  title,
  comments,
  url,
  onClickPost,
  currentPost,
  visited
}) => (
  <PostWrapper currentPost={currentPost.id === id}>
    <LeftPart>
      <Score>{score}</Score>
      <Title
        onClick={() => onClickPost({ id, score, title, comments, url })}
        visited={visited.indexOf(id) !== -1}
      >
        {title}
      </Title>
    </LeftPart>
    <Count
      onClick={() =>
        onClickPost({
          id,
          score,
          title,
          comments,
          url: `https://news.ycombinator.com/item?id=${id}`
        })
      }
    >
      {comments}
    </Count>
  </PostWrapper>
);

export default Post;
