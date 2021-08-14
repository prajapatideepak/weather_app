import './App.css';
import React from 'react'
import Navbar from './component/Navbar';
import Weather from './component/Weather';
import ErrorBoundary from './component/ErrorBoundary';
function App() {
  const [city , setcity] = React.useState('')
  return (
    <>
    <ErrorBoundary>
    <Navbar city={city} setcity={setcity} />

    <Weather city={city} />
    </ErrorBoundary>
    </>
  );
}

export default App;
