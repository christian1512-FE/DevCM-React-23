import React,{useState} from "react";
import Header from "./components/Header/index";
import Home from "./Pages/home";
import Contact from "./Pages/contact";

function App() {
  const [currentpage, setCurrentPage] = useState('home')
  const renderPage = () => {
    if (currentpage === 'home') {
      return <Home />;
    }
 
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
<Header currentpage = {currentpage} handlePageChange = {handlePageChange}/>    
{renderPage()}
</div>
  );
}

export default App;
