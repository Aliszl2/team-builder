import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TeamMembers = props => {
  console.log(props);
  useEffect(() => {

   
  });
  return (
    <div>
      {props.teamMembers.map(person => {
        return (
          <div>
            <h3>
              NAME: {person.firstName} {person.lastName} <br/> <br/>  ROLE:  {person.role} <br/> <br/>    eMail:  {person.email}{" "}
             
            </h3>
            <button onClick={props.handleEdit} >Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
