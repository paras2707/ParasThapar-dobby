import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" exact element={<Navigate to="/posts" />} />
          <Route path="/posts" exact element={<Home user={user} />} />
          <Route path="/posts/search" exact element={<Home user={user} />} />
          <Route
            path="/auth"
            exact
            element={!user ? <Auth /> : <Navigate to="/posts" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
