import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'; // Assuming you're using Bootstrap
import App from './App';

// Interface for App component props (optional)
interface AppProps {
    // Define any properties your App component might receive
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);