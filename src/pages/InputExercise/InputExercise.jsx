import { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";

export const InputExercise = () => {
  const [user, setUser] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");

  const addUser = () => {
    let newUser = new Map(user);
    let userId = newUser.size + 1;
    newUser.set(userId, { firstName: userFirstName, lastName: userLastName });
    setUser(newUser);
    setUserLastName("");
    setUserFirstName("");
    console.log(newUser);
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
        Input exercise
      </Typography>

      <Box sx={{ mb: 2 }}>
        {[...user].map(([id, { firstName, lastName }]) => (
          <Paper
            key={id}
            elevation={3}
            sx={{
              p: 2,
              my: 1,
              borderRadius: 2,
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "left",
            }}
          >
            <Typography variant="body1">
              First name: {firstName} - Last name: {lastName}
            </Typography>
          </Paper>
        ))}
      </Box>

      <TextField
        fullWidth
        label="First name"
        type="text"
        variant="outlined"
        value={userFirstName}
        onChange={(e) => setUserFirstName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Last name"
        variant="outlined"
        type="text"
        value={userLastName}
        onChange={(e) => setUserLastName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={addUser}
        disabled={userFirstName.length === 0 || userLastName.length === 0}
      >
        Add User
      </Button>
    </Box>
  );
};
