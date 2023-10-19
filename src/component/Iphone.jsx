import { Grid,Card,CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Iphone = () => {
  const [data, setData] = useState([]);
  console.log("data====", data);

  const getApi = async () => {
    const result = await axios.get("http://localhost:5010/iphone");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={6}>
        <Card>
          <CardContent>

         <h2 style={{textAlign:"center"}}> {item}</h2>
          </CardContent>
        </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Iphone;