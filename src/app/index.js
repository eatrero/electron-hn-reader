import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar';
import Content from '../content';

const AppWrapper = styled.div`
  display: flex;
`;

const sortItems = (a, b) => {
  if (b.score > a.score) {
    return 1;
  } else if (a.score > b.score) {
    return -1;
  }
  return 0;
};

function App({ items }) {
  const sortedItems = items.sort(sortItems).slice(1, 30);

  const [currentPost, setCurrentPost] = useState(sortedItems[0]);
  const [visited, setVisited] = useState([sortedItems[0].id]);

  const onClickPostHandler = post => {
    setCurrentPost(post);
    setVisited([...visited, post.id]);
  };

  return (
    <AppWrapper>
      <Sidebar
        id="sidebar"
        items={sortedItems}
        onClickPost={onClickPostHandler}
        currentPost={currentPost}
        visited={visited}
      />
      <Content id="content" src={currentPost.url} />
    </AppWrapper>
  );
}

export default App;
