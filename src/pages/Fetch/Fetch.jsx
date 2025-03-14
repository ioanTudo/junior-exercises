import { useEffect, useState } from "react";
import { Box, Typography, List, ListItem, Alert, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Fetch = () => {
  const [dataFetch, setDataFetch] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://dogapi.dog/api/v2/breeds/");

        if (!response.ok) {
          throw new Error("Eroare la preluarea datelor");
        }
        const data = await response.json();
        setDataFetch(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

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
        Fetch exercise
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <List>
        {loading ? (
          <p>Loading ....</p>
        ) : (
          dataFetch.map((itm, index) => (
            <ListItem key={index} sx={{ justifyContent: "center" }}>
              <Typography variant="h6">{itm.attributes.name}</Typography>
            </ListItem>
          ))
        )}
      </List>
    </Box>
  );
};
