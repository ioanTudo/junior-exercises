import { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export const Random = () => {
  const [color, setColor] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  const getRandomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.random();
    setColor(`rgba(${r}, ${g}, ${b}, ${a})`);
  };

  const getRandomNumber = () => {
    setNumberValue(Math.ceil(Math.random() * 1200));
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        textAlign: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Button
          style={{ textAlign: "center" }}
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ mb: 2 }}
        >
          Back Home
        </Button>
      </div>
      <Typography variant="h4" gutterBottom>
        Random Exercise
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
        <Button variant="contained" color="primary" onClick={getRandomColor}>
          Random Body Color
        </Button>
        <Button variant="contained" color="secondary" onClick={getRandomNumber}>
          Random Number
        </Button>
      </Box>

      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          borderRadius: 2,
          border: "1px solid black",
          backgroundColor: color,
          display: "inline-block",
          minWidth: "200px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{numberValue}</Typography>
      </Paper>
    </Box>
  );
};
