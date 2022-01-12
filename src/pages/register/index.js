import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import isEmpty from "lodash/isEmpty";
import styled from "styled-components";
import Step1 from "../step1";
import Step2 from "../step2";
import Step3 from "../step3";

function Register() {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      position: "",
      salary: "",
      address: "",
      moo: "",
      road: "",
      subArea: "",
      area: "",
      province: "",
      postalCode: "",
      education: "",
      portfolio: "",
      refer: "",
    },
  });

  const setValue = async (name, value) => {
    formik.setFieldValue(name, value);
    checkValidate();
  };

  const getStepContent = (step) => {
    let values = formik.values;
    switch (step) {
      case 0:
        return <Step1 values={formik.values} errors={errors} setValue={setValue}/>;
      case 1:
        return <Step2 values={formik.values} errors={errors} setValue={setValue}/>;
      case 2:
        return <Step3 values={formik.values} errors={errors} setValue={setValue}/>;
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formik.values, null, 2));
  }

  const checkValidate = () => {
    let errorObj = {}
    if(formik.values.firstname === ""){
      errorObj.firstname = "This field is required"
    }
    if(formik.values.lastname === ""){
      errorObj.lastname = "This field is required"
    }
    if(!formik.values.email){
      errorObj.email = "This field is required"
    } else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(formik.values.email)){
      errorObj.email = 'Invalid email format!'
    }
    if(formik.values.phoneNumber === ""){
      errorObj.phoneNumber = "This field is required"
    }
    if(formik.values.position === ""){
      errorObj.position = "This field is required"
    }
    if(formik.values.salary === ""){
      errorObj.salary = "This field is required"
    }
    if(formik.values.address === ""){
      errorObj.address = "This field is required"
    }
    if(formik.values.moo === ""){
      errorObj.moo = "This field is required"
    }
    if(formik.values.road === ""){
      errorObj.road = "This field is required"
    }
    if(formik.values.subArea === ""){
      errorObj.subArea = "This field is required"
    }
    if(formik.values.area === ""){
      errorObj.area = "This field is required"
    }
    if(formik.values.province === ""){
      errorObj.province = "This field is required"
    }
    if(formik.values.postalCode === ""){
      errorObj.postalCode = "This field is required"
    }
    setErrors(errorObj);
  };

  return (
    <Holder>
      <HolderForm>
        <form autoComplete={"off"}>
          <Title>R E G I S T E R</Title>
          <SubTitle>Information</SubTitle>
          {getStepContent(step)}
          <HolderButton>
            <Button
              type={"button"}
              back
              onClick={() => {
                if (step >= 1){
                  setStep(prevStep => prevStep - 1)
                }
              }}
            >
              Back
            </Button>
            {
              step <= 1 ? (
                <Button
                  type={"button"}
                  onClick={() => {
                      setStep(prevStep => prevStep + 1);
                  }}
                  >
                  Next
                </Button>
              ) : (
                <Button type={"button"} onClick={handleSubmit}>
                  Submit
                </Button>
              )
            }
          </HolderButton>
        </form>
      </HolderForm>
    </Holder>
  );
}

const Holder = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#e66465, #9198e5);
`;

const HolderForm = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 30%;
  height: fit-content;
  padding: 30px;

  @media only screen and (max-width: 1024px) {
      width: 80%;
  }
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  background: -webkit-linear-gradient(#e66465, #9198e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
`;

const SubTitle = styled(Title)`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
`;


const HolderButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: ${props => (props.back ? "#ffffff" : "#9933CC")};
  width: 100px;
  height: 40px;
  color: ${props => (props.back ? "gray" : "white")};
  border: ${props => (props.back ? "1px solid #9933CC" : "none")};
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: ${props => (props.back ? "15px" : "0px")};
`;

export default Register;
