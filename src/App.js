// LAB SOLUTION PROVIDED TO STUDENTS

import React from 'react';
import stockData from './components/stock-data';
import Header from './components/Header';
import Main from './components/Main';
import { withRouter } from 'react-router';
//  import "./styles.css";


function App(props) {
  return (
    <div>
      <Header />
      <Main stockData={stockData} />
    </div>
  );
}

export default App;
// export default withRouter(App)