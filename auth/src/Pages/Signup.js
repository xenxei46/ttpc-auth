import React from "react";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { 
    StyledTextInput, 
    StyledFormArea, 
    StyledButton, 
    StyledLabel,
    Avatar, StyledTitle, colors, 
    ButtonGroup, StyledIcon, ExtraText, TextLink  } from "../Components/Styled";

import Logo from './../assets/logo.png';
import {Formik, useFormik, Form} from 'formik';
// import {FiEyeOff, FiEye} from 'react-icons/fi';
import {FiMail, FiLock, FiUser, FiCalendar} from 'react-icons/fi';

import { TextInput } from '../Components/FormsLib';

import { ThreeDots } from "react-loader-spinner";

// import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };
  
const Signup = () => {

  const validationSchema = Yup.object({
        email: Yup.string()
           .email("Invalid email address")
           .required("Required"),
        name: Yup.string()
           .required("Required"),
        dateofBirth: Yup.date().required("Required"),
        password: Yup.string()
           .min(8, "password is too short")
           .max(30, "password is too long")
           .required("Required"),
        // repeatPassword: Yup.string()
        // .required("Required")
        // .oneOf([Yup.ref("password")], "passwords must match")
        confirmPassword: Yup.string()
        .required("Required").oneOf([Yup.ref("Password")], "passwords must match")

    })
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            dateofBirth: "",
            password: "",
            confirmPassword: "",           
        },
        // onSubmit: async (values: ISignupProps) => {
        //     signUpUser(values);
        //   },   
        validationSchema: validationSchema,
    })
    const {
        errors,
        handleSubmit,
        handleChange,
        isSubmitting,
        dirty,
        values,
    } = formik;

    return(
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.red} size={15}>
                    <p className='FormTitle'>Member Sign Up</p>
                </StyledTitle>
                <Formik  
                >
                    <Form>
                       <TextInput
                            name="name"
                            type="text"
                            label="Name"
                            placeholder="Wisdom ikoi"
                            values={values.name}
                            onChange={handleChange} 
                            error={errors.name}/>
                          <span className="icon">{<FiUser/>}</span>
                          <p className="errMsg">{errors.name}</p>
                        
                        <TextInput
                            name="email"
                            type="email"
                            label="Email Address"
                            placeholder="olga@example.com"
                            values={values.email}
                            onChange={handleChange}
                                                     />
                          <span className="icon">{<FiMail/>}</span>
                          <p className="errMsg">{errors.email}</p>
                         
                         <TextInput 
                            name="Date of birth"
                            type="date"
                            label="DOB"
                            placeholder="DOB"
                            values={values.dateofBirth}
                            onChange={handleChange} />
                          <span className="icon">{<FiCalendar/>}</span>
                          <p className="errMsg">{errors.dateofBirth}</p>

                          <TextInput
                            name="password"
                            type="password"
                            label="Password"
                            placeholder="**********************"
                            value={values.password}
                            onChange={handleChange}/>
                          <span className="icon">{<FiLock/>}</span>
                          <p className="errMsg">{errors.password}</p>

                          <TextInput
                            name="password"
                            type="password"
                            label="Confirm Password"
                            placeholder="**********************"
                            onChange={handleChange}
                            />
                            <span className="icon">{<FiLock/>}</span>
                            <p className="errMsg">{errors.confirmPassword}</p>
                           
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
                <ExtraText>Aleady Have an Account?</ExtraText><TextLink to="/Login">Login</TextLink>
            </StyledFormArea>
        </div>
    )
}

export default Signup;