import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/nav/Nav";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
import "./sass/style.scss";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
