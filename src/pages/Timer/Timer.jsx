import { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mb: 2 }}
      >
        Back Home
      </Button>

      <Typography variant="h5" gutterBottom>
        Timer
      </Typography>

      <Typography variant="h1" sx={{ mb: 2 }}>
        {seconds}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          disabled={isActive}
          onClick={() => setSeconds(0)}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={!isActive}
          onClick={() => setIsActive(false)}
        >
          Stop
        </Button>
        <Button
          variant="contained"
          color="success"
          disabled={isActive}
          onClick={() => setIsActive(true)}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
};
