import { Button } from "@mui/material"

export function DefaultButton(props) {
    return (
        <div>
            <Button
                href={props.href}
                onClick={props.onClick}
                className={props.className}
                style={{
                    backgroundColor: props.backgroundColor,
                    color: "#FFFFFF",
                    width: 380,
                    height: 75,
                    borderRadius: 25,
                    fontWeight: "bold",
                    fontSize: 20
                }}
            >
            {props.title}
            </Button>
        </div>
    )
}