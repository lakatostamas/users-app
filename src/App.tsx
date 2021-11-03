import React from 'react';
import Layout from './app/components/layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
