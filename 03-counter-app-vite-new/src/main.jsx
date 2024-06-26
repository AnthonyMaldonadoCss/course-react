import React from 'react'
import ReactDOM from 'react-dom/client'

import { HelloWorld } from './HelloWorld';
import { FirstApp } from './FirstApp';


const root = ReactDOM.createRoot( document.getElementById('root') );

root.render(
  <React.StrictMode>
    <HelloWorld />
    <FirstApp />
  </React.StrictMode>
)