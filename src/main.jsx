import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Home } from "./pages/Home";
import App from "./App";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Timer } from "./pages/Timer/Timer.jsx";
import { AddToList } from "./pages/AddToList/AddToList";
import { SortExercise } from "./pages/SortExercise/SortExercise";
import { Fetch } from "./pages/Fetch/Fetch";
import { Random } from "./pages/Random/Random";
import { InputExercise } from "./pages/InputExercise/InputExercise";
import { IsPalindrome } from "./pages/ArrayExercises/IsPalindrome";
import { IsAnagram } from "./pages/ArrayExercises/IsAnagram";
import { VowelsCounter } from "./pages/ArrayExercises/VowelsCounter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/timer-exercise", element: <Timer /> },
      { path: "/list-exercise", element: <AddToList /> },
      { path: "/sort-exercise", element: <SortExercise /> },
      { path: "/fetch-exercise", element: <Fetch /> },
      { path: "/random-exercise", element: <Random /> },
      { path: "/input-exercise", element: <InputExercise /> },
      { path: "/isPalindrome", element: <IsPalindrome /> },
      { path: "/isAnagram", element: <IsAnagram /> },
      { path: "/vowelsCounter-exercise", element: <VowelsCounter /> },
    ],
  },
]);
const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
