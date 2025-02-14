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
          <Route path="/ana-sayfa" element={<HomePage />} />
        </Route>
        <Route path="/hakkimizda" element={<AboutUsPage />} />
        <Route path="/eğitimlerimiz" element={<AproachesList />}>
          <Route path=":lessonId" element={<AproachesList />} />
        </Route>
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
