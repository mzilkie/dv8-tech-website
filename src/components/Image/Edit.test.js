import React from 'react';
import ReactDOM from 'react-dom';
import ImageEdit from './Edit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageEdit />, div);
  ReactDOM.unmountComponentAtNode(div);
});
