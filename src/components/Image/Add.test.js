import React from 'react';
import ReactDOM from 'react-dom';
import ImageAdd from './Add';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageAdd />, div);
  ReactDOM.unmountComponentAtNode(div);
});
