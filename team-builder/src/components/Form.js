import React, { useState } from "react";
import styled from "styled-components";
import TeamMembers from "./TeamMembers";

const Form = ({ memberToEdit, handleEdit }) => {
  console.log(memberToEdit);
  const [newTeamMember, setNewTeamMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: ""
  });
  const [teamMembers, setTeamMembers] = useState([
    {
      firstName: "Nabeelah",
      lastName: "Yousuf",
      email: "NL@gmail.com",
      role: "Team Lead"
    },
    {
        firstName: "Amin",
        lastName: "Hasan",
        email: "ah@gmail.com",
        role: "Lambda Student"
      }
      ,
    {
        firstName: "Amin",
        lastName: "Hasan",
        email: "ah@gmail.com",
        role: "Lambda Student"
      },
      {
          firstName: "Eoin",
          lastName: "Lynch",
          email: "el@gmail.com",
          role: "Lambda Student"
        }, {
            firstName: "Eoin",
            lastName: "Lynch",
            email: "el@gmail.com",
            role: "Lambda Student"
          }, {
            firstName: "Eoin",
            lastName: "Lynch",
            email: "el@gmail.com",
            role: "Lambda Student"
          }
  ]);

  function handleChange(e) {
    //   console.log(e.target.name);
    //   console.log(e.target.value);
    setNewTeamMember({
      ...newTeamMember,
      [e.target.name]: e.target.value
    });
    console.log(newTeamMember);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.persist();
    console.log(e);

    setTeamMembers(teamMembers => [...teamMembers, newTeamMember]);
    console.log(teamMembers);
    setNewTeamMember({
      firstName: "",
      lastName: "",
      email: "",
      role: ""
    });
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
            value={newTeamMember.firstName}
          />
          <br />
          <label htmlFor="teamMember_lastName">Last name </label>
          <input
            type="text"
            name="lastName"
            id="teamMember_lastName"
            placeholder="last name"
            onChange={handleChange}
            value={newTeamMember.lastName}
          />
          <br />
          <label htmlFor="teamMember_email">Work email</label>
          <input
            type="email"
            name="email"
            id="teamMember_email"
            placeholder="email"
            onChange={handleChange}
            value={newTeamMember.email}
          />
          <br />
          <label htmlFor="teamMember_role">Team role </label>
          <input
            type="text"
            name="role"
            id="teamMember_role"
            placeholder="team role"
            onChange={handleChange}
            value={newTeamMember.role}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <TeamMembers
        teamMembers={teamMembers}
        handleEdit={handleEdit}
        memberToEdit={memberToEdit}
      />
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
