import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {router} from "./router/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter router={router}>
    <App/>
  </BrowserRouter>
);
