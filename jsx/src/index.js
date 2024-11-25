// 1. import react and reactDom libraries
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'

// 2. get a reference to the div with ID root
const el = document.getElementById('root');

// 3. tell react to take control of that elemenet
const root = ReactDom.createRoot(el);

// 4. Show component on the screen
root.render(<App />);