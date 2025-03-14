import { Link } from "react-router-dom";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export const Home = () => {
  const [bgColorBtn, setBgColorBtn] = useState("red");

  useEffect(() => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    setBgColorBtn(`rgb(${r}, ${g}, ${b})`);
  }, []);
  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Exercise list
      </Typography>

      <Stack spacing={2}>
        <Button
          style={{ backgroundColor: bgColorBtn }}
          variant="contained"
          component={Link}
          to="/timer-exercise"
        >
          Timer Exercise
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/list-exercise"
        >
          Add to List Exercise
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/sort-exercise"
        >
          Sort Exercise
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/fetch-exercise"
        >
          Fetch Exercise
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/random-exercise"
        >
          Random color and number
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/input-exercise"
        >
          Input exercise
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/isPalindrome"
        >
          ispalindrome exercise
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/isAnagram"
        >
          isanagram exercise
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: bgColorBtn }}
          component={Link}
          to="/vowelsCounter-exercise"
        >
          vowels counter exercise
        </Button>
      </Stack>
    </Box>
  );
};
