// import React,{useState} from "react"
import React, { useState } from "react";
import JobList from "./JobList";
import data from "./Jobs.json";
// import data from "./jobs.json";
// import data from "./jobs.json";
import Job from "./Job";

const FindJobs = () => {
  const [filteredJob, setFilteredJobs] = useState(data);
  return (
    <div>
      <JobList setFilteredJobs={setFilteredJobs} />
      <Job data={filteredJob} />
    </div>
  );
};

export default FindJobs;

// import React from "react";
// import Button from "@mui/material/Button";
// const JobSearch = () => {
//   return (
//     <div>
//       <h4>JobSearch searching</h4>
//       <section className="container row d-flex">
//         <select
//           style={{
//             width: 350,
//             height: 30,
//             borderRadius: 20,
//           }}
//         >
//           <option>Product Manager</option>
//           <option>Software Engineer</option>
//           <option>Mobile Engineer</option>
//         </select>
//         <div className="col-md-6 d-flex justify-content-evenly">
//           <select
//             style={{
//               width: 200,
//               height: 30,
//               borderRadius: 20,
//             }}
//           >
//             <option>India</option>
//             <option>Japan</option>
//             <option>Seatle</option>
//           </select>
//           <div>
//             <Button variant="contained">Search</Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default JobSearch;
