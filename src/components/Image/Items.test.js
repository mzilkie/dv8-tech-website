import React from 'react';
import ReactDOM from 'react-dom';
import ImageItems from './Items';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});
