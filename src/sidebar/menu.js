import React from 'react';
import styled from 'styled-components';
import { Refresh } from '@material-ui/icons';

const Hamburger = styled.span`
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.isDrawerOpen ? 'scale(0.5)' : 'scale(0.6)')};
`;

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
`;

const StyledRefresh = styled(Refresh)`
  color: rgb(140, 140, 140);
`;

const Menu = ({ isDrawerOpen, onClickRefresh }) => (
  <MenuWrapper>
    <Hamburger isDrawerOpen={isDrawerOpen}>
      <Line
        css={{
          transform: isDrawerOpen ? 'translateX(-10px) rotate(-45deg)' : 'none'
        }}
      />
      <Line />
      <Line
        css={{
          transform: isDrawerOpen ? 'translateX(-10px) rotate(45deg)' : 'none'
        }}
      />
    </Hamburger>
    <StyledRefresh fontSize="large" onClick={() => onClickRefresh()} />
  </MenuWrapper>
);

export default Menu;
