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
      disabled={props.disabled}
      onKeyPress={props.onKeyPress}
      style={{
        width: props.width ?? 320,
        height: props.height ?? 5,
        backgroundColor: "#fff"
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
      onKeyPress={props.onKeyPress}
      style={{
        width: props.width ?? 320,
        height: props.height,
        backgroundColor: "white"
      }}
    >
    </TextField>
  )
}

export function SearchTextField(props) {
  return (
    <TextField
      value={props.value}
      id="searchTextField"
      variant="standard"
      placeholder="Search"
      type="text"
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      style={{
        backgroundColor: "white",
        height: props.height ?? 45,
        width: props.width ?? 800,
        marginTop: props.marginTop,
        marginLeft: props.marginLeft
      }}
    >
    </TextField>
  )
}