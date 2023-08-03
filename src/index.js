import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AcademiaContextProvider } from './context/context';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AcademiaContextProvider>
                <App />
            </AcademiaContextProvider>
        </Router>
    </React.StrictMode>,
  document.getElementById("root")
)

/* const rootElement = document.getElementById('root');
const app = (
    <React.StrictMode>
        <BrowserRouter>
    <AcademiaContextProvider>
        <App />
    </AcademiaContextProvider>
    </BrowserRouter>
    </React.StrictMode>
    
); */

/* rootElement.hasChildNodes()
    ? hydrate(app, rootElement)
    : render(app, rootElement);
 */