import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
// import SingleWorkout from './pages/SingleWorkout';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          {/* <Route
                path="/workout/:id"
                element={<SingleWorkout />}
              /> */}
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Routes>

        <Footer />
      </Router>

    </ApolloProvider>
  );
}
export default App;