import { Typography } from "@material-ui/core";

export function DefaultTypography(props) {
    return (
        <Typography
            variant= {props.variant}
            component="h2"
            style={{
                color: props.color,
                textAlign: props.textAlign,
                paddingTop: props.paddingTop,
                paddingBottom: props.paddingBottom,
                fontFamily: props.fontFamily
            }}
        >
            { props.text }
        </Typography>
    )
}