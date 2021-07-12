import React from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import ActivityPage from './pages/ActivityPage';
import ItemSingle from './pages/ItemSingle';

function App() {
  return (
    <Router>
      <ul style={{position: 'absolute', zIndex: 5,}}>
        <li><Link to="/">index</Link></li>
        <li><Link to="/activity">activity</Link></li>
        <li><Link to="/item-single">item-single</Link></li>
      </ul>
      <Route path="/" exact component={IndexPage} />
      <Route path="/activity" component={ActivityPage} />
      <Route path="/item-single" exact component={ItemSingle} />
    </Router>
    
  );
}

export default App;
