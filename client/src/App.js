import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AlertErrors from "./Components/AlertErrors";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import PrivateRoutes from "./PrivateRoutes";
import { get_current } from "./redux/Action/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation />
      <AlertErrors />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile></Profile>
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
