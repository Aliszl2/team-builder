import React, { useState } from "react";

const Form = () => {

    return (
        <div className="teamMembers_form">
<form action="">
<label htmlFor="teamMember_firstName">First name </label>
        <input
          type="text"
          name="firstName"
          id="teamMember_firstName"
          placeholder="Enter first name"
         
        />

</form>

        </div>
    );
};

export default Form;