import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { MessageProviderWrapper } from './context/UserMessage.context';

ReactDOM.render(
  <Router>
    <MessageProviderWrapper>
      <App />
    </MessageProviderWrapper>
  </Router>,
  document.getElementById('root')
)
