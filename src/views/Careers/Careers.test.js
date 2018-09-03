import React from 'react';
import ReactDOM from 'react-dom';
import Careers from './Careers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Careers />, div);
  ReactDOM.unmountComponentAtNode(div);
});
