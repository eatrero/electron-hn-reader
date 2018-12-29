import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;

  webview {
    height: 100vh;
  }
`;

const Content = ({ src }) => {
  return (
    <ContentWrapper>
      <webview id="content" src={src} />
    </ContentWrapper>
  );
};

export default Content;
