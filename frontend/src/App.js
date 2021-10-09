
import './App.css';
import {Login} from "./pages/Login"

import React from 'react'
import Testing from "./pages/Testing";
import Layout from "./components/Layout";
import {AppRouter} from "./components/AppRouter";

function App() {

  return (
    <Layout>
      <AppRouter/>
    </Layout>
  );
}

export default App;
