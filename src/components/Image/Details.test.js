import React from 'react';
import ReactDOM from 'react-dom';
import ImageDetails from './Details';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
