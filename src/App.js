import React from "react";
import Landing from "./component/Landing";
import { Card,CardContent } from "@mui/material";

function App() {
  return (
    <Card sx={{bgcolor:"skyblue",height:"100vh"}}>
      <CardContent>

   <Landing/>
      </CardContent>
    </Card>
  );
}

export default App;
