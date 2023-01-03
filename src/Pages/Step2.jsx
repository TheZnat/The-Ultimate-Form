import React from 'react';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormControlLabel, Typography, Checkbox} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {parsePhoneNumberFromString} from "libphonenumber-js"

import InputComponent from "../Component/InputComponent";
import PrimaryButton from "../Component/PrimaryButton";
import MainContainer from '../Component/MainContainer'
import FormComponent from "../Component/FormComponent";
import {useData} from "../hook/useData";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email address should have correct format")
        .required("Email is a required field")
});

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber){
        return value
    }
    return (
        phoneNumber.formatInternational()
    )
}

const Step2 = () => {
    const {data, setValue} = useData();
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        defaultValues: {
            phoneNumber: data.phoneNumber,
            email: data.email,
            hasPhone: data.hasPhone
        },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const watchPhone = watch("hasPhone");
    const navigate = useNavigate();
    const onSubmit = (data) => {
        navigate("/step3");
        setValue(data)
    };
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 2
            </Typography>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <InputComponent
                {...register('email')}
                id="email"
                type="email"
                label="Email"
                name = "email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
                />
                <FormControlLabel control={
                    <Checkbox
                        name="hasPhone"
                        color="primary"
                        {...register('hasPhone')}
                    />
                } label="Do you have a phone" />

                {watchPhone && (
                        <InputComponent
                            {...register('phoneNumber')}
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            label="Phone number"
                            defaultValue={data.hasPhone}

                            onChange={(event) => {
                                event.target.value = normalizePhoneNumber(event.target.value) ;
                            }}
                        />
                    )
                }
                <PrimaryButton>Next</PrimaryButton>
            </FormComponent>
        </MainContainer>
    );
};

export default Step2;