import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/home";
import GoPro from './pages/goPro';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="go-pro" element={<GoPro/>}/>
        </Routes>
     </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
