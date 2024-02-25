import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react';
import { StateContextProvider } from './context/index.jsx';
import App from './App.jsx';
import 'tailwindcss/tailwind.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider 
    activeChain={ChainId.Goerli}
    clientId='c61397240d4e20d259d1b03fac56c32f'
    >
        <Router>
            <StateContextProvider>
            <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)

