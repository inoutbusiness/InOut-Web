import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import InOutRoutes from './routes'

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <div>
        <InOutRoutes />
    </div>
);