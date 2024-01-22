import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const jobs = [
  {
    id: 1,
    position: "Software Engineer",
    description: "Automated API platform for banking integrations",
    city: "Pune",
    thumbnail:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/image5-3.png?auto=format&q=60&fit=max&w=930",
  },
  {
    id: 2,
    position: "Product Manager",
    description: "Banking and payments for the global economy",
    city: "Mumbai",
    thumbnail:
      "https://www.rd.com/wp-content/uploads/2019/01/beats.jpg?fit=700,700",
  },
  {
    id: 3,
    position: "Engineering Manager",
    description:
      "Online ordering platform empowering restaurants to reduce their dependence on aggregators",
    city: "Pune",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0n4ODoAIA--3sUNXFOtz78IfoaPwViociyQ&usqp=CAU",
  },
  {
    id: 4,
    position: "Product Manager",
    description: "B2B SaaS Data Platform for Video Streaming (OTT) Analytics",
    city: "Mumbai",
    thumbnail:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logos-design-template-3b01eb4c6758c5365fe758fe4e776a94_screen.jpg?ts=1610529432",
  },
  {
    id: 5,
    city: "Kolhapur",
    position: "Mobile Engineer",
    description: "The Trusted Care Companion for Indian Parents",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBHyuf_bJCZp8l1H7u1JJDjkaGnv7_N1IAw&usqp=CAU",
  },
];

const JobList = ({ jobs }) => {
  return (
    <div>
      {jobs.map((job) => (
        <Card sx={{ width: "400px", padding: "2px" }}>
          <div className="border" key={job.id}>
            <p>{job.city}</p>
            <p>{job.position}</p>
            <img width={"100px"} src={job.thumbnail} alt="" />
            <h5>{job.description}</h5>
          </div>
        </Card>
      ))}
    </div>
  );
};

const JobFilter = ({ setFilteredJobs }) => {
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");

  const handleFilter = () => {
    const filteredJobs = jobs.filter((job) => {
      if (city && position) {
        return job.city === city && job.position === position;
      } else if (city) {
        return job.city === city;
      } else if (position) {
        return job.position === position;
      } else {
        return true;
      }
    });

    setFilteredJobs(filteredJobs);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <h3>Show me</h3>
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ width: 250 }} variant="outlined">
            <InputLabel id="demo-multiple-name-label">Position</InputLabel>
            <Select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              {/* {/ <MenuItem value="">None</MenuItem> /} */}
              <MenuItem value="Software Engineer">SoftWare Engineer</MenuItem>
              <MenuItem value="Product Manager">Product Manager</MenuItem>
              <MenuItem value="Engineering Manager">
                Engineering Manager
              </MenuItem>
              <MenuItem value="Mobile Engineer">Mobile Engineer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} style={{ textAlign: "center" }}>
          <h3>roles, hiring in</h3>
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ m: 1, width: 200, color: "#000" }}>
            <InputLabel id="demo-multiple-name-label">City</InputLabel>
            <Select value={city} onChange={(e) => setCity(e.target.value)}>
              {/* {/ <MenuItem value="">None</MenuItem> /} */}
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Kolhapur">Kolhapur</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1}>
          <Button onClick={handleFilter}>Search</Button>
        </Grid>
      </Grid>
    </>
  );
};

const JobsProfile = ({}) => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <div>
      <JobFilter setFilteredJobs={setFilteredJobs} />
      <JobList jobs={filteredJobs} />
    </div>
  );
};

export default JobsProfile;
