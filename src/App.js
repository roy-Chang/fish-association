import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ActivityPage from "./pages/ActivityPage";
import ItemSingle from "./pages/ItemSingle";
import TravelNotesPage from "./pages/TravelNotesPage";
import AuthPage from "./pages/AuthPage";
import MemberPage from "./pages/MemberPage";

function App() {
  return (
    <Router>
      <ul style={{ position: "absolute", zIndex: 5 }}>
        <li>
          <Link to="/">index</Link>
        </li>
        <li>
          <Link to="/activity">activity</Link>
        </li>
        <li>
          <Link to="/item-single">item-single</Link>
        </li>
        <li>
          <Link to="/travel-notes">travel-notes</Link>
        </li>
        <li>
          <Link to="/auth">auth</Link>
        </li>
        <li>
          <Link to="/member">member</Link>
        </li>
      </ul>
      <Route path="/" exact component={IndexPage} />
      <Route path="/activity" component={ActivityPage} />
      <Route path="/travel-notes" component={TravelNotesPage} />
      <Route path="/item-single" component={ItemSingle} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/member" component={MemberPage} />
    </Router>
  );
}

export default App;
