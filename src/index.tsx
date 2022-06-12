import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Alert} from "./Components/Alert";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Alert type={'error'} />
  </React.StrictMode>
);
