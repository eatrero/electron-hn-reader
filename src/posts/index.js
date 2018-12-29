import React from 'react';
import styled from 'styled-components';
import Post from '../post';

const PostsWrapper = styled.ul`
  padding: 0;
  margin: 0;
`;

const Posts = ({ items, onClickPost, currentPost, visited }) => {
  return (
    <PostsWrapper>
      {items.map(({ id, score, title, url, kids }, i) => (
        <Post
          key={id}
          id={id}
          score={score}
          title={title}
          url={url}
          comments={kids.length}
          onClickPost={onClickPost}
          currentPost={currentPost}
          visited={visited}
        />
      ))}
    </PostsWrapper>
  );
};

export default Posts;
