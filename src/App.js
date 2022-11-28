import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


import Dashboard from "./routes/dashboard/dashboard.component";
import Create from "./routes/Create/create.component";
import Login from "./routes/login/login.component";
import Project from "./routes/project/project.component";
import Signup from "./routes/signup/signup.component";
import Nav from "./routes/Nav/Nav.component";
import { useContext } from "react";

function App() {

  const {user, authIsReady} = useContext(AuthContext)

  return (
    <BrowserRouter>
    {authIsReady && (
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={user ? <Dashboard /> : <Navigate to='/login' />} />
          <Route path="/create" element={user ? <Create /> : <Navigate to='/login' />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />
          <Route path="/project/:id" element={user ? <Project /> : <Navigate to='/login' />} />
        </Route>
      </Routes>
    )}
    </BrowserRouter>
  );
}

export default App;
