import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
 const [teamMember, setTeamMember]=useState({
    firstName:"",
    lastName:"",
    email:"",
 })

  return (
    <StyledDiv>        <h1>Enter Team Member:</h1>
      <form action="">
        <label htmlFor="teamMember_firstName">First name </label>
        <input
          type="text"
          name="firstName"
          id="teamMember_firstName"
          placeholder="first name"
        /><br/>
         <label htmlFor="teamMember_lastName">Last name </label>
        <input
          type="text"
          name="lastName"
          id="teamMember_lastName"
          placeholder="last name"
        /><br/>
          <label htmlFor="teamMember_email">Work  email</label>
        <input
          type="email"
          name="email"
          id="teamMember_email"
          placeholder="email"
        /><br/>
               <label htmlFor="teamMember_role">Team role </label>
           <input
          type="text"
          name="role"
          id="teamMember_role"
          placeholder="team role"
        />
      </form>
    </StyledDiv>
  );
};

export default Form;


const StyledDiv = styled.div`
border:5px black solid;
width:700px;
margin: 0 auto;
form{
    margin:50px;
}
`