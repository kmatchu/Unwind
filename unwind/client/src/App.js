import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import API from "./utils/API";

// const App = () => (
//   <div>
//     <Nav />
//     <Books />
//   </div>
// );


const App = () => (
  <Router>
    <div>
        <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
);

export default App;

// export default App;
// import {Router,Router, browserHistory, IndexRoute} from "react-router"
// import {Home} from "./components/Home";


// <Router history={browserHistory>
// 	<Route path={"/"} component={Root}>
// 		<IndexRoute component={Home} />
// 		<Route path={"home"} component={Home} />
// 	</Route>
// </Router>