import React from 'react';
import ReactDOM from 'react-dom';
import ImageItem from './ImageItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
