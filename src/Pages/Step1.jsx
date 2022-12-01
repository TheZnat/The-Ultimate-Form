import React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import MainContainer from '../Component/MainContainer'
import {Typography} from "@material-ui/core";
import FormComponent from "../Component/FormComponent";
import InputComponent from "../Component/InputComponent";
import {useForm} from "react-hook-form";
import PrimaryButton from "../Component/PrimaryButton";
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core";
import { Controller } from 'react-hook-form';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
});

const Step1 = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                 Step 1
            </Typography>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                    {...register('firstName')}
                    id="firstName"
                    type="text"
                    label="First Name"
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </FormComponent>
        </MainContainer>
    );
};

export default Step1;