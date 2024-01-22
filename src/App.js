import React, { Component } from "react";
import BasicRouting from "./Components/basic-routing/BasicRouting";
import FindJobs from "./Components/job search profile task/FindJobs";
import JobsProfile from "./Components/job search profile task/JobsProfile";
import LazyLoading from "./Components/lazy-loading/LazyLoading";
import Navigation from "./Components/navigation/Navigation";
import BasicsRouting from "./Components/routing template task/BasicsRouting";
import Login from "./Components/Routing-tasks/Redirect and navigate task/Home";
import Product from "./Components/Routing-tasks/Redirect and navigate task/Product";
import SignUP from "./Components/Routing-tasks/Redirect and navigate task/Product";
import SearchParameters from "./Components/search-parameters/SearchParameters";
import SecuredRoutes from "./Components/secured-routes/SecuredRoutes";
import RouteParameters from "./Components/user-app/RouteParameters";
import UserApp from "./Components/user-app/UserApp";
class App extends Component {
  //here we direct use component not React.Component so in named import write { Component } like this
  render() {
    //JSX
    return (
      <div className="app">
        {/* <BasicRouting /> */}
        {/* <SearchParameters /> */}
        {/* <JobsProfile /> */}
        {/* <FindJobs /> */}
        <SecuredRoutes />
        {/* <Jobs /> */}
        {/* <h2>Routing and Navigation</h2> */}
        {/* <Product /> */}
        {/* <hr /> */}
        {/* <Login /> */}
        {/* <Navigation /> */}
        {/* <RouteParameters /> */}
        {/* <BasicsRouting /> */}
        {/* <LazyLoading /> */}
      </div>
    );
  }
}
export default App;
