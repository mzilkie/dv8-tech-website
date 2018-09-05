import React from 'react';
import ReactDOM from 'react-dom';
import ImageItem from './Item';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
