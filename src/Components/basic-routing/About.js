import React from "react";
import Overview from "./Overview";
import Team from "./Team";
import { Routes, Route, Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <h2>About Contact</h2>
      <p>sample {"About".repeat(20)} component content</p>
      {/* <hr />
      <Overview />
      <hr />
      <Team />  */}
      {/* <Link to="">Overview</Link>
      <Link to="team">Team</Link> */}
      {/* when we take nested route here below in about we take nested route team so to access team we need to give /* to Route(path) of about i.e "about/*"  */}
      {/* <Link to="/about/team">Team</Link>
      <hr /> */}
      {/* <Routes>
        <Route path="" element={<Overview />} /> */}
      {/* <Route path="team" element={<Team />} />
      </Routes> */}
      <Link to="">Overview</Link>
      {/* below "team" represent current nested routing component  */}
      {/* below we did't give / because it is nested  */}

      <Link to="team">Team</Link>
      {/* below is nested Route(path) so we tell "about" path thers is nested inside you so for
      that we give "about/*" like this where Route is defined  */}
      <Link to="/about/team">Team</Link>
      <Routes>
        <Route path="" element={<Overview />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </>
  );
};

export default About;
