import { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const IsAnagram = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [visibility, setVisibility] = useState("none");

  const cleanText1 = value1.trim().toLowerCase();
  const cleanText2 = value2.trim().toLowerCase();

  let sortItem1 = cleanText1.split("").sort().join("");
  let sortItem2 = cleanText2.split("").sort().join("");

  const isAnagram = sortItem1 === sortItem2;
  const message = isAnagram
    ? "The words are anagrams!"
    : "The words are not anagrams!";

  const getIsAnagram = () => {
    setVisibility("block");
    setTimeout(() => setVisibility("none"), 5000);
    setTimeout(() => setValue1(""), 5000);
    setTimeout(() => setValue2(""), 5000);
  };

  const aboutAnagram =
    "An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.";

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
        Is Anagram Exercise
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          disabled={visibility === "block"}
          label="First Word"
          variant="outlined"
          fullWidth
          onChange={(e) => setValue1(e.target.value)}
          value={value1}
        />
        <TextField
          disabled={visibility === "block"}
          label="Second Word"
          variant="outlined"
          fullWidth
          onChange={(e) => setValue2(e.target.value)}
          value={value2}
        />
        <Button
          disabled={
            visibility === "block" || value1.length === 0 || value2.length === 0
          }
          variant="contained"
          color="primary"
          onClick={getIsAnagram}
        >
          Check if words are anagrams
        </Button>
        <Typography
          variant="h6"
          sx={{
            display: visibility,
            mt: 2,
            p: 1,
            color: isAnagram ? "success.light" : "error.light",
            borderRadius: 1,
          }}
        >
          {message}
        </Typography>
        <p style={{ display: visibility }}>{aboutAnagram}</p>
      </Box>
    </Container>
  );
};
