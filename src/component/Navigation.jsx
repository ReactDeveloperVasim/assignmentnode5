import { Grid, Button, CardContent,Card } from "@mui/material";
import React from "react";
import { navData } from "./navData";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Card sx={{marginBottom:"20px",bgcolor:"blue"}}><CardContent>
    <Grid container spacing={2}>
   
    {navData.map((item) => (
        <Grid item xs={2}>
          <Link to={item.path}>
            <Button variant="contained" fullWidth color="warning">
              {item.label}
            </Button>
          </Link>
        </Grid>
      ))}
   
    
    </Grid>
    </CardContent></Card>
  );
};

export default Navigation;
