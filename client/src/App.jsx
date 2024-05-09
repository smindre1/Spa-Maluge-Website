import "./App.css";
import Header from "./components/Header";
import SettingsHeader from './components/SettingsHeader';
import Footer from "./components/Footer";
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import {setContext } from '@apollo/client/link/context';
// require('dotenv').config();

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink1 = setContext((_,{headers}) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
})

const client = new ApolloClient({
  link: authLink1.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const location = useLocation();

  const [regularPage, setRegularPage] = useState(true);

  useEffect(() => {
    //Checks the endpoint to load certain header html elements
    const regex = /management/i;
    const endpointMatch = location.pathname.match(regex)
    if(endpointMatch != null) {
      setRegularPage(false);
    } else {
      setRegularPage(true);
    }
  }, [location.pathname])
  
  return (
    <ApolloProvider client={client}>
      <div>
        { regularPage ? <Header /> : <SettingsHeader />}
        <Outlet />
        { regularPage ? <Footer /> : null}
      </div>
    </ApolloProvider>
  );
}

export default App;
