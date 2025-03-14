import { Outlet, Link } from "react-router-dom";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
