import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import SignoutPage from './components/pages/SignoutPage.jsx';
import { UserProvider } from './UserContext.jsx';


function MainComponent() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true); // Initialize state variable

  return (
    <React.StrictMode>
      <UserProvider value={{ isUserSignedIn, setIsUserSignedIn }}>
        {isUserSignedIn ? <App /> : <SignoutPage />}
      </UserProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
      <MainComponent />
)