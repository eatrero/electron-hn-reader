import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  width: 30px;
  height: 25px;
  position: absolute;
  left: 10px;
  top: 25px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${({ open, fill }) => (open ? fill : 'rgb(120,120,120)')};
    border-radius: 4px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 9px;
  }

  span:nth-child(4) {
    top: 18px;
  }
`;

const Hamburger = ({ fill, open, onClickHamburger }) => (
  <HamburgerWrapper fill={fill} open={open} onClick={onClickHamburger}>
    <span />
    <span />
    <span />
    <span />
  </HamburgerWrapper>
);

export default Hamburger;
