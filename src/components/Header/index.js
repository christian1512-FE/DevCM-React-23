import React from "react";
import NavComponent from "../Navbar";


function PageHeader ({currentpage, handlePageChange}) {
    return (
    <header>
        <h1>Christian Mendez</h1>
        <NavComponent currentpage = {currentpage} handlePageChange = {handlePageChange}/>
    </header>
    );
}
export default PageHeader;

