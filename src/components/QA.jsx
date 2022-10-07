import { pink } from "@mui/material/colors";

import React from "react";
import { Button, Chip, Stack, Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
const QA = ({
  score,
  setScore,
  showresult,
  setShowResult,
  question,
  setQuestion,
}) => {
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const check = (selAns, corAns) => {
    if (selAns == corAns) {
      setIsCorrect(true);
      setScore(score + 1);
    }
    setClicked(true);
  };

  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          sx={{ marginY: 1, display: "flex", justifyContent: "space-between"
        
        
        }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "500",
            }}
          >
            Question#
            {index + 1}/{question.length}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "500",
            }}
          >
            Score: {score}
          </Typography>
        </Grid>
        <hr />

        {/*  mapping questions*/}

        <Typography
          variant="h5"
          sx={{
            marginY: 3,
            fontWeight: "400",
          }}
        >
          {question[index].question}
        </Typography>
        <Grid
          container
          sx={{

            padding: 1.5,
            display: "flex",
            alignContent: "space-between",
            flexDirection: { sm: "column", md: "row" },
            justifyContent: "center",
          }}
        >
          {question[index].options.map((x, i) => (
            <Grid
              item
              md={12}
              xs={12}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: { sm: "column", md: "row" },
                justifyContent: "center",
                
              }}
            >
              <Chip
                label={x}
                key={i}
                clickeable={!clicked}
                color={
                  clicked && x == question[index].answer ? "success" : "primary"
                }
                sx={{
                  margin: { lg: 1, md: 0.5, sm: 0.5, xs: 0.5 },
                  padding: { lg: 2.5, md: 1.5, sm: 1.5, xs: 1.5 },
                  fontSize: "1rem",
                  width: {lg:"80%",md:"80%",sm:"80%",xs:"80%"},
                }}
                onClick={() => check(x, question[index].answer)}
              />
            </Grid>
          ))}
          <Grid
            item
            sx={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Button
              endIcon={<SendIcon />}
              sx={{
                backgroundColor: pink[500],
                marginY: 1,
                padding: 1,
                borderRadius: 20,
                paddingX: 3,
              }}
              variant="contained"
              disabled={!clicked}
              onClick={() => {
                setClicked(false);
                if (index == question.length - 1) {
                  setIndex(0);
                  setShowResult(true);
                } else {
                  setIndex(index + 1);
                }
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QA;
