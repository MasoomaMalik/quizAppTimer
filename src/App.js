import "./App.css";
import QA from "./components/QA";
import { useState } from "react";
import Header from "./components/Header";
import { Button, Box, Typography, Grid } from "@mui/material";
import ShowScore from "./components/ShowScore";
import Timer from "./components/Timer";
function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const [question, setQuestion] = useState([
    {
      id: 0,
      question: `What is the capital of Nigeria?`,
      options: [`New Delhi`, `Abuja`, `Owerri`, `Enugu`],
      answer: `Abuja`,
    },
    {
      id: 0,
      question: `What is the capital of India?`,
      options: [`New Delhi`, `Abuja`, `Mumbai`, `Aba`],
      answer: `New Delhi`,
    },
    {
      id: 0,
      question: `What is the capital of Australia?`,
      options: [`Melbourne`, `Akokwa`, `Owerri`, `Sydney`],
      answer: `Sydney`,
    },
    {
      id: 0,
      question: `What is the capital of Turkey?`,
      options: [`Rijadh`, `Ankara`, `Istanbul`, `Abakaliki`],
      answer: `Ankara`,
    },
    {
      id: 0,
      question: `What is the capital of Syria?`,
      options: [`Syria`, `Damascus`, `Anambra`, `Enugu`],
      answer: `Damascus`,
    },
  ]);
  return (
    <>
   
      {showResult ? (
        <ShowScore
          score={score}
          question={question}
          setScore={setScore}
          setShowResult={setShowResult}
        />

      ) : (
<Grid
container

sx={{
  display:'flex',
            justifyContent:'center',
            alignSelf:"center"
            ,backgroundColor:"#035b4e",


}}
>
        <Grid item
          sx={{
            margin:3,
            border: 2,
            borderRadius: 10,
            height: "90vh",
            width: "60vw"
            , color:'black',
            backgroundColor:'white',
            padding:6
          }}
        >
          <Header />
          <Timer 
          showResult={showResult}
          setShowResult={setShowResult} />
          <QA
            question={question}
            setQuestion={setQuestion}
            showResult={showResult}
            setShowResult={setShowResult}
            score={score}
            setScore={setScore}
          />
        </Grid>
        </Grid>
      )}
    </>
  );
}

export default App;
