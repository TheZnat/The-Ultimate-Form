import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import { Controller } from 'react-hook-form';
// import { Controller } from 'react-hook-form';

const InputComponent = forwardRef((props, ref) => {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            {...props}
        />
    );
});

export default InputComponent;

// const InputComponent = ({control, name, label}) => {
//     return (
//         <Controller
//             control={control}
//             name={name}
//             as={TextField}
//             label={label}
//
//             render={({ field }) => (
//                 <TextField
//                     variant="outlined"
//                     margin="normal"
//                     fullWidth
//                 />
//             )}
//
//         />
//     );
// };