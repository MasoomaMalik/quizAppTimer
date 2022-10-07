import React from "react";
import { pink } from "@mui/material/colors";

import { Typography, Box, Grid } from "@mui/material";
import Timer from "./Timer";
const Header = () => {
  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography
              sx={{ marginBottom: 2, fontWeight: "600", color: pink[500] }}
              variant="h3"
            >
              Quizia
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
