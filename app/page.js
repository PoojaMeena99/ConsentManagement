"use client"
import { React, useState } from "react";
import Main_menu from "./main_menu";
import Side_penal from "./side_penal";
import User_form from "./user_form";
import User_collected_details from "./user_collected_details";
import Validate_token from "./validate_token";

function page() {

  const [currentPage, setCurrentPage] = useState(1);

  const [formData, setFormData] = useState({
    id: "",
    redirectUri: "",
    policyVersion: "",
    purpose: "",
    scope: ""
  });

  return (
    <div className="main-container">
      <Main_menu />
      <Side_penal />
      <div className="container">
        {currentPage === 1 && <User_form
          formData={formData}
          setFormData={setFormData}
          setCurrentPage={setCurrentPage}
        />}
        {currentPage === 2 && <User_collected_details
          formData={formData}
          setCurrentPage={setCurrentPage}
        />}
        {currentPage === 3 && <Validate_token
          setCurrentPage={setCurrentPage}
        />}
      </div>
    </div>
  )
}
export default page;

