import React, { useState } from "react";
// import { useSearchParams } from 'react-router-dom';
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "./Jobs.json";
const JobList = () => {
  // const[searchParams, setSearchParams] = useSearchParams();
  // const[jobs, setJobs] = useState([]);
  // useEffect(() => {
  //     const profile = searchParams.get("profile");
  //     const city = searchParams.get("city");
  //     console.log("Profile :", profile);
  //     console.log("City :", city);

  //     let jData = [];
  //     if(profile && city){
  //         jData = data.filter((job) => (job.profile == profile || profile == "all") && (job.city == city || city == "all"))
  //     }else if(profile){
  //         jData = data.filter((job) => job.profile == profile);
  //     }else if(city){
  //         jData = data.filter((job) => job.city == city);
  //     }else{
  //         jData = data;
  //     }
  //     console.log("jData :", jData);
  //     if(Array.isArray(jData)) setJobs(jData);
  // }, [searchParams])
  const [profile, setProfile] = useState("");
  const [city, setCity] = useState("");
  const [filteredJob, setFilteredJobs] = useState(data);

  const handleFilter = () => {
    const filteredJobs = data.filter((job) => {
      if (profile && city) {
        return job.profile === profile && job.city === city;
      } else if (profile) {
        return job.profile === profile;
      } else if (city) {
        return job.city === city;
      } else {
        return true;
      }
    });
    setFilteredJobs(filteredJobs);
    console.log("Data :", filteredJobs);
  };
  return (
    <Container sx={{ maxWidth: "100%" }}>
      <Card sx={{ maxWidth: "100%", margin: 5, padding: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <h3>Show me</h3>
          </Grid>
          <Grid item xs={3}>
            <FormControl sx={{ width: 250 }} variant="outlined">
              <InputLabel id="demo-multiple-name-label">Profile</InputLabel>
              <Select
                onChange={(e) => setProfile(e.target.value)}
                value={profile}
                id="profiles"
              >
                {/* {/ <MenuItem value="">None</MenuItem> /} */}
                <MenuItem value="SoftWare Engineer">SoftWare Engineer</MenuItem>
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
              <Select
                onChange={(e) => setCity(e.target.value)}
                value={city}
                id="cities"
              >
                {/* {/ <MenuItem value="">None</MenuItem> /} */}
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Kolhapur">Kolhapur</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" onClick={handleFilter}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default JobList;
