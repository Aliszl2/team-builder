import React, { useState } from "react";
import styled from "styled-components";
import TeamMembers from "./TeamMembers";

const Form = () => {
  const [newTeamMember, setNewTeamMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role:""

  });
  const [teamMembers, setTeamMembers] = useState([]);

  function handleChange(e){
      console.log(e.target.name);
      console.log(e.target.value);
    setNewTeamMember({
        ...newTeamMember,
        [e.target.name]:e.target.value
    })
    console.log(newTeamMember);
}


function handleSubmit(e) {
    e.preventDefault();
    e.persist();
    console.log(e);
    const initialState={
        firstName: "",
        lastName: "",
        email: "",
        role:""
      }
      setTeamMembers(teamMembers.concat(newTeamMember))
      console.log(teamMembers);
    //   setNewTeamMember(initialState);

}

  return (
    <StyledDiv>
      <div>
        <h1>Enter Team Member:</h1>
        <form type="submit" onSubmit={handleSubmit}>
          <label htmlFor="teamMember_firstName">First name </label>
          <input
            type="text"
            name="firstName"
            id="teamMember_firstName"
            placeholder="first name"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="teamMember_lastName">Last name </label>
          <input
            type="text"
            name="lastName"
            id="teamMember_lastName"
            placeholder="last name"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="teamMember_email">Work email</label>
          <input
            type="email"
            name="email"
            id="teamMember_email"
            placeholder="email"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="teamMember_role">Team role </label>
          <input
            type="text"
            name="role"
            id="teamMember_role"
            placeholder="team role"
            onChange={handleChange}
          /><br/>
        <button type="submit">Submit</button>
        </form>
      </div>
      <TeamMembers teamMembers={teamMembers}/>
    </StyledDiv>
  );
};

export default Form;

const StyledDiv = styled.div`
  div {
    border: 5px black solid;
    width: 700px;
    margin: 0 auto;
    form {
      margin: 50px;
    }
  }
`;
