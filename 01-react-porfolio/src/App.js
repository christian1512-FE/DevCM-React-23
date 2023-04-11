import React, { useState } from "react";
import Header from "./components/Header/index";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import Contact from "./Pages/contact";
import Resume from "./Pages/resume";
import Footer from "./components/Footer";

import "./index.css";



function App() {
  const [currentpage, setCurrentPage] = useState('home')
  const renderPage = () => {
    if (currentpage === 'home') {
      return <Home />;
    }
    if (currentpage === 'projects') {
      return <Projects />;
    }
    if (currentpage === 'contact') {
      return <Contact />;
    }
    if (currentpage === 'resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="main">
      <Header currentpage={currentpage} handlePageChange={handlePageChange} style={{ backgroundColor: "black" }} />
      {renderPage()}
      <Footer />

    </div>
  );
}

export default App;
