import React, { useState } from "react";
import styled from "styled-components";

const TeamMembers = props => {
  console.log(props);
  return (
    <div>
      {props.teamMembers.map(person => {
        return (
          <div>
            <h3>
              NAME: {person.firstName} {person.lastName} EMAIL:{person.email}{" "}
              ROLE:{person.role}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMembers;
