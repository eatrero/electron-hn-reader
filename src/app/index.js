import regeneratorRuntime from 'regenerator-runtime';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar';
import Content from '../content';
import { getTopStories } from '../lib/api';

const AppWrapper = styled.div`
  display: flex;
`;

function App() {
  const [items, setItems] = useState([]);
  const [currentPost, setCurrentPost] = useState({});
  const [visited, setVisited] = useState([]);

  const onClickPostHandler = post => {
    setCurrentPost(post);
    setVisited([...visited, post.id]);
  };

  const onClickRefresh = async () => {
    const items = await getTopStories();
    const sortedItems = items.slice(1, 50);
    setItems(sortedItems);
    if (!currentPost.id) {
      setCurrentPost(sortedItems[0]);
    }
  };

  useEffect(() => {
    onClickRefresh();
  }, []);

  return (
    <AppWrapper>
      <Sidebar
        id="sidebar"
        items={items}
        onClickPost={onClickPostHandler}
        currentPost={currentPost}
        visited={visited}
        onClickRefresh={onClickRefresh}
      />
      <Content id="content" src={currentPost && currentPost.url} />
    </AppWrapper>
  );
}

export default App;
