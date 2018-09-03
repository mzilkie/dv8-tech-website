import React from 'react';
import ReactDOM from 'react-dom';
import AuthForm from './AuthForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
