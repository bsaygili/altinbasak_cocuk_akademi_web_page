import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, NavMenu, Footer } from "./components";
import { AboutUsPage, AproachesList, ContactPage, HomePage } from "./pages";

import "./app.scss";
function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <NavMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/lessons" element={<AproachesList />}>
          <Route path=":lessonId" element={<AproachesList />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
