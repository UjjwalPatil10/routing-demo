import React from "react";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import data from "./Jobs.json"
const Job = ({ data, name, profile, thumbnail, description, city }) => {
  return (
    <Container>
      <div>
        {data.map((job, i) => (
          <Card
            style={{
              width: "50%",
              padding: 5,
              margin: 5,
              border: "1px solid #000",
            }}
            key={i}
          >
            <img src={job.thumbnail} style={{ width: "20%", height: 50 }} />
            <h5>{job.description}</h5>
            <h4>{job.profile}</h4>
            <h5>{job.city}</h5>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Job;
