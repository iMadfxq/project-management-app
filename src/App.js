import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./routes/dashboard/dashboard.component";
import Create from "./routes/Create/create.component";
import Login from "./routes/login/login.component";
import Project from "./routes/project/project.component";
import Signup from "./routes/signup/signup.component";
import Nav from "./routes/Nav/Nav.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/project/:id" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
