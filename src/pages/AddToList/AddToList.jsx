import { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export const AddToList = () => {
  const [list, setList] = useState([]);
  const [newList, setNewList] = useState("");

  const addItemToList = () => {
    setList([...list, newList]);
    setNewList("");
  };

  const deleteItemFromList = (index) => {
    setList(list.filter((_, item) => item !== index));
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
        Add to List
      </Typography>
      <TextField
        fullWidth
        value={newList}
        label="Add something"
        variant="outlined"
        onChange={(e) => setNewList(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={addItemToList}
        disabled={newList.length === 0}
      >
        Add
      </Button>

      <List sx={{ mt: 2 }}>
        {list.map((itm, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                color="error"
                onClick={() => deleteItemFromList(index)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={itm.toUpperCase()} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
