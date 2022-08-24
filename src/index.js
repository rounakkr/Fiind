import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultsContextProvider } from "./Contexts/ResultsContextProvider";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ResultsContextProvider>
        <Router>
            <App />
        </Router>
    </ResultsContextProvider>
);