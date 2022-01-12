import React from "react";
import styled from "styled-components";
import InputField from "../../components/inputField";

function Step2(props) {
  return (
    <Holder>
      <InputField
        type={"text"}
        name={"address"}
        placeholder={"Address"}
        value={props.values.address}
        onChange={(name, value) => props.setValue(name, value)}
        status={props.errors.address}
        message={props.errors.address}
      />
      <Row>
        <InputField
          style={{"marginRight": "10px"}}
          type={"text"}
          name={"moo"}
          placeholder={"Moo"}
          value={props.values.moo}
          onChange={(name, value) => props.setValue(name, value)}
          status={props.errors.moo}
          message={props.errors.moo}
        />
        <InputField
          style={{"marginLeft": "10px"}}
          type={"text"}
          name={"road"}
          placeholder={"Road"}
          value={props.values.road}
          onChange={(name, value) => props.setValue(name, value)}
          status={props.errors.road}
          message={props.errors.road}
        />
      </Row>
      <Row>
        <InputField
          style={{"marginRight": "10px"}}
          type={"text"}
          name={"subArea"}
          placeholder={"Sub-area"}
          value={props.values.subArea}
          onChange={(name, value) => props.setValue(name, value)}
          status={props.errors.subArea}
          message={props.errors.subArea}
        />
        <InputField
          style={{"marginLeft": "10px"}}
          type={"text"}
          name={"area"}
          placeholder={"Area"}
          value={props.values.area}
          onChange={(name, value) => props.setValue(name, value)}
          status={props.errors.area}
          message={props.errors.area}
        />
      </Row>
      <Row>
        <InputField
          style={{"marginRight": "10px"}}
          type={"text"}
          name={"province"}
          placeholder={"Province"}
          value={props.values.province}
          onChange={(name, value) => props.setValue(name, value)}
          status={props.errors.province}
          message={props.errors.province}
        />
        <InputField
          style={{"marginLeft": "10px"}}
          type={"text"}
          name={"postalCode"}
          placeholder={"Postal Code"}
          value={props.values.postalCode}
          onChange={(name, value) => props.setValue(name, value)}
          status={props.errors.postalCode}
          message={props.errors.postalCode}
        />
      </Row>
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
  box-sizing:border-box;
`;

const Row = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  box-sizing:border-box;

  @media only screen and (max-width: 1024px) {
      width: 100%;
  }
`;

export default Step2;
