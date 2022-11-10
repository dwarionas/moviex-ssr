import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = hydrateRoot(container, <App />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
