import "./App.css";
import Header from "./components/Header";
import SettingsHeader from './components/SettingsHeader';
import Footer from "./components/Footer";
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// require('dotenv').config();


function App() {
  const location = useLocation();

  const [regularPage, setRegularPage] = useState(true);

  useEffect(() => {
    //Checks the endpoint to load certain header html elements
    const regex = /management/i;
    const endpointMatch = location.pathname.match(regex)
    console.log("endpoint:", location.pathname);
    if(endpointMatch != null) {
      setRegularPage(false);
    } else {
      setRegularPage(true);
    }
  }, [location.pathname])
  
  return (
    <div>
      { regularPage ? <Header /> : <SettingsHeader />}
      <Outlet />
      { regularPage && location.pathname != '/book-now' ? <Footer /> : null}
    </div>
  );
}

export default App;
