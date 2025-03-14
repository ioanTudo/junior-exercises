import { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export const IsPalindrome = () => {
  const [value1, setValue1] = useState("");
  const [visibility, setVisibility] = useState("none");

  const cleanText = value1.trim().toLowerCase();
  const isPalindrome = cleanText === cleanText.split("").reverse().join("");

  const message = isPalindrome.toString().toUpperCase();
  const aboutPalindrome =
    "A palindrome (/ˈpæl.ɪn.droʊm) is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards";

  const getPalindrome = () => {
    setVisibility("block");
    setTimeout(() => setVisibility("none"), 5000);
    setTimeout(() => setValue1(""), 5000);
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
      <Typography variant="h5" gutterBottom>
        isPalindrome Exercise
      </Typography>

      <TextField
        disabled={visibility === "block"}
        fullWidth
        label="Enter text"
        variant="outlined"
        type="text"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        fullWidth
        variant="contained"
        color="primary"
        disabled={visibility === "block" || value1.length === 0}
        onClick={getPalindrome}
        sx={{ mb: 2 }}
      >
        Check if the word is palindrome
      </Button>

      <Paper
        style={{ display: visibility }}
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 2,
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
          display: visibility,
          minHeight: "40px",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          style={{ color: message === "TRUE" ? "green" : "red" }}
        >
          {message}
        </Typography>
        <p style={{ display: visibility }}>{aboutPalindrome}</p>
      </Paper>
    </Box>
  );
};
