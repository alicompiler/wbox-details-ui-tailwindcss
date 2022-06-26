import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Example} from "./__example/Example";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Example />
  </React.StrictMode>
);
