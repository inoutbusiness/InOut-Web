import { TextField } from "@mui/material";

export function DefaultTextField(props) {
    return (
        <TextField
            value={props.value}
            id="defaultTextField"
            variant={props.variant}
            label={props.label}
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            inputProps={props.inputProps}
            style={{
                width: props.width ?? 400,
                height: props.height,
                backgroundColor: "white"
            }}
        >
        </TextField>
    )
}

export function PasswordTextField(props) {
    return (
        <TextField
            value={props.value}
            id="passwordTextField"
            variant={props.variant}
            label={props.label}
            type={props.type}
            onChange={props.onChange}
            inputProps={props.inputProps}
            style={{
                width: props.width ?? 250,
                height: props.height,
                backgroundColor: "white"
            }}
        >
        </TextField>
    )
}