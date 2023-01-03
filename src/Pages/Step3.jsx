import React from 'react';
import {useNavigate} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {useForm} from "react-hook-form";

import MainContainer from '../Component/MainContainer'
import FormComponent from "../Component/FormComponent";
import FileInput from "../Component/FileInput";
import PrimaryButton from "../Component/PrimaryButton";
import {useData} from "../hook/useData";



const Step3 = () => {
    const {data, setValue} = useData()

    const {control, handleSubmit} = useForm({
        defaultValues: {
            files: data.files
        }
    })
    const navigate = useNavigate()
    const onSubmit = (data) => {
        navigate("/result");
        setValue(data)
    };
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                Step 3
            </Typography>
            <FormComponent onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control} />
                <PrimaryButton>Next</PrimaryButton>
            </FormComponent>
        </MainContainer>
    );
};

export default Step3;