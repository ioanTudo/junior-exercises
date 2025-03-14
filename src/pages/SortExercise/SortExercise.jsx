import { useState } from "react";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SortExercise = () => {
  const [isSort, setIsSort] = useState(false);
  const [list, setList] = useState([]);

  const fruits = [
    "Mango",
    "Grapes",
    "Kiwi",
    "Strawberry",
    "Peach",
    "Banana",
    "Apple",
    "Pineapple",
    "Watermelon",
    "Orange",
  ];

  const getSortedAZ = (arr) => {
    setList(arr.sort());
    setIsSort(true);
  };

  const getSortedZA = (arr) => {
    setList(arr.sort().reverse());
    setIsSort(true);
  };

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
        Sort Fruits
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => getSortedAZ(fruits)}
        >
          Sort A-Z
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => getSortedZA(fruits)}
        >
          Sort Z-A
        </Button>
      </Box>

      <List>
        {(isSort ? list : fruits).map((fruit, index) => (
          <ListItem key={index} sx={{ justifyContent: "center" }}>
            <Typography variant="h6">{fruit}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
