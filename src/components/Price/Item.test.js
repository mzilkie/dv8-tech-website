import React from 'react';
import ReactDOM from 'react-dom';
import PriceItem from './Item';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriceItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
