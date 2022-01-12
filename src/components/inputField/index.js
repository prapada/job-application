import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  box-sizing:border-box;

  @media only screen and (max-width: 1024px) {
      width: 100%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 20px;;
`;

const Title = styled.div`
  font-size: 18px;
  margin-left: 10px;
  white-space: nowrap;
`;

const Input = styled.input`
  font-size: 1.2rem;
  width: 100%;
  width: -webkit-fill-available;
  padding: 4px 0px 4px 10px;
  height: 38px;
  text-align: left;
  background-color: transparent;
  margin: 10px 0px 5px;
  border: ${props => (props.message ? `1px solid red` : `1px solid black`)};
  color: black;

  &:focus {
    outline: none;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    padding: 0px 10px;
  }
`;

const RadioField = styled.input`
  background-color: #221e1f;
  border: 1px soild #ba8748;
  height: 18px;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

const MessageText = text => <ErrorText>{text}</ErrorText>;

function InputField(props) {
  const inputRef = useRef();
  const [prestine, setPrestine] = useState(true);

  const handleChange = () => {
    const { name, value } = inputRef.current;
    setPrestine(false);
    props.onChange(name, value);
  }

  if (props.type === "radio") {
    return (
      <Row>
        <RadioField
          {...props}
          ref={inputRef}
          name={props.name}
          type={props.type}
          onChange={handleChange}
        />
        <Title>{props.title}</Title>
      </Row>
    );
  }
  return (
    <Holder>
      <Input
        {...props}
        ref={inputRef}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
      {props.message && MessageText(props.message)}
    </Holder>
  );
}

export default InputField;
