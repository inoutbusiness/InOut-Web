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
                    fontSize: 20
                }}
            >
            {props.title}
            </Button>
    )
}