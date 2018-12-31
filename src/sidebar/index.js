import React, { useState } from 'react';
import styled from 'styled-components';
import Posts from '../posts';
import Menu from './menu';

const SidebarWrapper = styled.div`
  font-size: 16px;
  background-color: rgb(246, 246, 239);
  width: ${({ open }) => (open ? '900px' : '0px')};
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid rgb(140, 140, 140);
  padding: 0;
`;

const Sidebar = ({
  items,
  onClickPost,
  currentPost,
  visited,
  onClickRefresh
}) => {
  const [open, setOpen] = useState(true);

  const onClickHamburger = () => {
    console.log('********** open', open);
    setOpen(!open);
  };

  return (
    <SidebarWrapper open={open}>
      <Menu
        open={open}
        onClickRefresh={onClickRefresh}
        onClickHamburger={onClickHamburger}
      />
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
