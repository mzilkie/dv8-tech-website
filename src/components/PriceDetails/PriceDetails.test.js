import React from 'react';
import ReactDOM from 'react-dom';
import PriceDetails from './PriceDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PriceDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});
