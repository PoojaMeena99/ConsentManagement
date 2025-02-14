import React from "react";
import Main_menu from "./main_menu";
import Side_penal from "./side_penal";
// import Consent_details from "./user_form";
import User_collected_details  from "./user_collected_details";
// import Validate_token from "./validate_token";
// import Token_accepted from "./token_accepted";



const page = () => {
  return (
    <div className="main-container">
      <Main_menu />
      <Side_penal />
      <div className="container">
        {/* <Consent_details /> */}
        <User_collected_details />
        {/* <Validate_token /> */}
        {/* <Token_accepted /> */}
      </div>
    </div>
  )
}
export default page;


 