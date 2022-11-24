import React from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { 
    StyledTextInput, 
    StyledFormArea, 
    StyledButton, 
    StyledLabel,
    Avatar, StyledTitle, colors, 
    ButtonGroup, StyledIcon, ExtraText, TextLink  } from "../Components/Styled";

import Logo from './../assets/logo.png';
import {Formik, useFormik, Form} from 'formik';
import {FiEyeOff, FiEye} from 'react-icons/fi';
import {FiMail, FiLock} from 'react-icons/fi'

import { TextInput } from '../Components/FormsLib';

import { ThreeDots } from "react-loader-spinner";

//connect the login to the redux store
//auth & redux
// import {connect} from 'react-redux';
// import {LoginUser} from "./../auth/actions/userActions"

//To redirect to a page when you login you need to take details of your history to achieve this we will use history
// import {Navigate} from "react-router-dom";

// import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };
  
const Login = () => {

    // const navigate = useNavigate();

  const validationSchema = Yup.object({
        email: Yup.string()
           .email("Invalid email address")
           .required("Required"),
        password: Yup.string()
           .min(8, "password is too short")
           .max(30, "password is too long")
           .required("Required"),
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        // onSubmit: async (values,{setSubmitting, setFieldError}) => {
        //     console.log(values);
        //     (values,setSubmitting, setFieldError );
        //   },   
        validationSchema: validationSchema,
    })
    const {
        errors,
        handleSubmit,
        handleChange,
        isSubmitting,
        setSubmitting,
        dirty,
        values,
    } = formik;

    return(
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.red} size={15}>
                    <p className='FormTitle'>Member Login</p>
                </StyledTitle>
                <Formik  
                >
                    <Form>
                    <TextInput className="formInput"
                          name="email"
                          type="text"
                          label="Email Address"
                          placeholder="olga@example.com"
                          values={values.email}
                          onChange={handleChange}
                          />
                          <span className="icon">{<FiMail/>}</span>
                          <p className="errMsg">{errors.email}</p>
                          
                        <TextInput className="formInput"
                          name="password"
                          type="password"
                          label="Password"
                          placeholder="*******"
                          value={values.password}
                          onChange={handleChange}
                          />
                          <span className="icon">{<FiLock/>}</span>
                          <p className="errMsg">{errors.password}</p> 
                          
                          <ButtonGroup>
                            {isSubmitting && (<StyledButton
                            type="submit"
                            >
                                Login
                            </StyledButton>)}
                            
                            {!isSubmitting && (
                                <ThreeDots 
                                height="40" 
                                width="40" 
                                radius="9"
                                color="#4fa94d" 
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                                 />
                            )}

                          </ButtonGroup>
                    </Form>                    
                </Formik>
                <ExtraText>New here?</ExtraText><TextLink
                        to="/Signup">Sign Up</TextLink>
            </StyledFormArea>
        </div>
    )
}

//connecton between the login component and redux is handled here using HOF(Higher order function a function that can house other functions)
export default Login;