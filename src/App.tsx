import React, { FC } from 'react';
import './tailwind.css';
import reactotron from 'Util/Config/Reactotron';
import Layout from 'Containers/Layout';
import { BrowserRouter, Router } from 'react-router-dom';
import Routes from 'Routes';
import history from 'Util/History';

const App: FC = () => {
  reactotron.log!('test');
  return (
    <Layout>
      <Router history={history}>
        <Routes />
      </Router>
    </Layout>
  );
};

export default App;
