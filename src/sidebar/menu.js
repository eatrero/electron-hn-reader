import React from 'react';
import styled from 'styled-components';
import { Refresh } from '@material-ui/icons';
import Hamburger from './hamburger';

const Line = styled.span`
  width: 40px;
  height: 5px;
  background-color: rgb(140, 140, 140);
  display: block;
  margin: 8px auto;
  transition: transform 0.3s ease-in-out;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(220, 220, 220);
  padding: 20px 0 0 5px;
  -webkit-app-region: drag;
`;

const StyledRefresh = styled(Refresh)`
  color: rgb(140, 140, 140);
  padding-left: 40px;
  -webkit-app-region: no-drag;
`;

const Menu = ({ open, onClickRefresh, onClickHamburger }) => (
  <MenuWrapper>
    <Hamburger open={open} onClickHamburger={onClickHamburger} fill="#8c8c8c" />
    {open && (
      <StyledRefresh fontSize="large" onClick={() => onClickRefresh()} />
    )}
  </MenuWrapper>
);

export default Menu;
