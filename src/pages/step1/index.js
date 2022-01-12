import React from "react";
import styled from "styled-components";
import InputField from "../../components/inputField";

function Step1(props) {
  return (
    <Holder>
      <InputField
        type={"text"}
        name={"firstname"}
        placeholder={"Firstname"}
        value={props.values.firstname}
        onChange={(name, value) => props.setValue(name, value)}
        status={props.errors.firstname}
        message={props.errors.firstname}
      />
      <InputField
        type={"text"}
        name={"lastname"}
        placeholder={"Lastname"}
        value={props.values.lastname}
        onChange={(name, value) => props.setValue(name, value)}
        status={props.errors.lastname}
        message={props.errors.lastname}
      />
      <InputField
        type={"text"}
        name={"email"}
        placeholder={"Email"}
        value={props.values.email}
        onChange={(name, value) => props.setValue(name, value)}
        status={props.errors.email}
        message={props.errors.email}
      />
      <InputField
        type={"text"}
        name={"phoneNumber"}
        placeholder={"Phone Number"}
        value={props.values.phoneNumber}
        onChange={(name, value) => props.setValue(name, value)}
        status={props.errors.phoneNumber}
        message={props.errors.phoneNumber}
      />
      <InputField
        type={"text"}
        name={"position"}
        placeholder={"Position Applied for"}
        value={props.values.position}
        onChange={(name, value) => props.setValue(name, value)}
        status={props.errors.position}
        message={props.errors.position}
      />
      <InputField
        type={"text"}
        name={"salary"}
        placeholder={"Salary"}
        value={props.values.salary}
        onChange={(name, value) => props.setValue(name, value)}
        status={props.errors.salary}
        message={props.errors.salary}
      />
    </Holder>
  );
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  padding-top: 0px;
`;

export default Step1;
