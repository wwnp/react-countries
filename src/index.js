import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import { ContexProvider } from "./contex/contex";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import './index.scss'

const app = (
  <ContexProvider>
    <BrowserRouter basename="/react-countries">
      <App />
    </BrowserRouter>
  </ContexProvider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);