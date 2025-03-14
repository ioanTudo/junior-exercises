import { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const VowelsCounter = () => {
  const [value, setValue] = useState("");
  const [visibility, setVisibility] = useState("none");

  const vowels = value.trim().match(/[a,e,i,o,u]/gi);
  const arrVowel = vowels || [];

  const countVowels = () => {
    setVisibility("block");
    setTimeout(() => setVisibility("none"), 4000);
    setTimeout(() => setValue(""), 4000);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ textAlign: "center", mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}
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
        Vowel Counter
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Enter text"
          variant="outlined"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={visibility === "block"}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={countVowels}
          disabled={arrVowel.length === 0 || visibility === "block"}
        >
          Count Vowels
        </Button>
        <Typography
          variant="h6"
          sx={{
            display: visibility,
            mt: 2,
            p: 1,
            color: "info.light",
            borderRadius: 1,
          }}
        >
          {value.includes(" ")
            ? `There are ${arrVowel.length} vowels in the sentence that you've provided us.`
            : `There are ${arrVowel.length} vowels in the word that you've provided us.`}
        </Typography>
      </Box>
    </Container>
  );
};
