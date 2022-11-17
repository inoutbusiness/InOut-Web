import { Button } from "@mui/material"

export function DefaultButton(props) {
    return (
            <Button
                href={props.href}
                onClick={props.onClick}
                className={props.className}
                style={{
                    backgroundColor: props.backgroundColor,
                    color: "#FFFFFF",
                    width: props.width ?? 380,
                    height: props.height ?? 75,
                    borderRadius: 25,
                    fontWeight: "bold",
                    fontSize: 15
                }}
            >
            {props.title}
            </Button>
    )
}

export function MultistepButton(props) {
    return (
            <Button
                href={props.href}
                onClick={props.onClick}
                className={props.className}
                style={props.style}
            >
            {props.title}
            </Button>
    )
}