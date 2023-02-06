import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './component/home';
import about from './component/about';
import contact from './component/contact';
import contact1 from './component/contact1';
import contact2 from './component/contact2';
import { useParams } from 'react-router-dom'

function Search() {
  const { query } = useParams()
  

}

function AppRouter() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">Al Generated Movies</Link>
          </li>
          <li>
            <Link to="/contact/">Movies</Link>
          </li>
          <li>
            <Link to="/contact1/">Advancend search</Link>
          </li>
          <li>
            <Link to="/contact2/">popular actors</Link>
          </li>
          <li>
          <Link to={`/search/${query}`}>Search</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/Home/" component={HomePage} />
      <Route path="/about/" element={About} />
      <Route path="/contact/" element={contact} />
      <Route path="/contact1/" element={contact1} />
      <Route path="/contact2/" element={contact2} />
      <Route path="/search/:query" element={Search}/>
    </Router>
  );
}

export default AppRouter;