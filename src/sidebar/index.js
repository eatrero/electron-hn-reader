import React from 'react';
import styled from 'styled-components';
import Posts from '../posts';

const SidebarWrapper = styled.div`
  font-size: 16px;
  background-color: rgb(246, 246, 239);
  width: 900px;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid rgb(140, 140, 140);
  padding: 0;
`;

const Sidebar = ({ items, onClickPost, currentPost, visited }) => {
  return (
    <SidebarWrapper>
      <Posts
        items={items}
        onClickPost={onClickPost}
        currentPost={currentPost}
        visited={visited}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
