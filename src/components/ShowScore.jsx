import React from "react";
import { pink } from "@mui/material/colors";
import { Button, Chip, Stack, Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import Header from "./Header";

const ShowScore = ({ score, question, setScore, setShowResult }) => {
  return (
    <>
      <Grid
        container
        spacing={8}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Grid
          item
          rowSpacing={5}
          columnSpacing={5}
          sx={{
            marginY: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Typography variant="h4" sx={{ fontWeight: "400" }}>
            You Scored {score}/{question.length}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: pink[500],
              padding: 2,
              marginY: 2,
              fontSize: "1.5rem",
            }}
            onClick={() => {
              setScore(0);
              setShowResult(false);
            }}
          >
            Try Again
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ShowScore;
