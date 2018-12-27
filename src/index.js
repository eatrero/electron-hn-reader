import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Create main App component
class App extends React.Component {
  render() {
    return (
      <div>
        <Title>Hello, this is your first Electron app!</Title>

        <p>I hope you enjoy using this electron react app. Woot</p>
      </div>
    );
  }
}

// Create your own root div in the body element before rendering into it
let root = document.createElement('div');

// Add id 'root' and append the div to body element
root.id = 'root';
document.body.appendChild(root);

// Render the application into the DOM, the div inside index.html
render(<App />, document.getElementById('root'));
