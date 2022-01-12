import React from "react";
import styled from "styled-components";
import InputField from "../../components/inputField";

const education = [
  {
    id: 1,
    name: "High School"
  },
  {
    id: 2,
    name: "Vocational"
  },
  {
    id: 3,
    name: "Bechelor degree"
  },
  {
    id: 4,
    name: "Post-Graduate"
  },
  {
    id: 55,
    name: "Other"
  }
];

function Step2(props) {
  return (
    <Holder>
      <Row>
        <Column>
          <Title>Education</Title>
          {
            education.map((e) => {
              return (
                <InputField
                  style={{"marginLeft": "10px"}}
                  type={"radio"}
                  name={"education"}
                  title={e.name}
                  value={e.name}
                  checked={e.name === props.values.education}
                  onChange={(name, value) => props.setValue(name, value)}
                />
              )
            })
          }
        </Column>
      </Row>
      <InputField
        type={"text"}
        name={"portfolio"}
        placeholder={"Portfolio Link"}
        value={props.values.portfolio}
        onChange={(name, value) => props.setValue(name, value)}
      />
      <InputField
        type={"text"}
        name={"refer"}
        placeholder={"Refer By"}
        value={props.values.refer}
        onChange={(name, value) => props.setValue(name, value)}
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
  box-sizing:border-box;
`;

const Row = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  box-sizing:border-box;
`;

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 18px;
  text-align: left;
`;

export default Step2;
