import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProviderWrapper } from './context/UserMessage.context';
import { AuthProviderWrapper } from './context/Auth.context';

ReactDOM.render(
  <Router>
    <MessageProviderWrapper>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </MessageProviderWrapper>
  </Router>,
  document.getElementById('root')
)
