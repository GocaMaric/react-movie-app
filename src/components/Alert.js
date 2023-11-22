const Alert = (props) => {
    return (
        <div className={"alert" + props.className} role={"alert"}>
            {props.message}
        </div>
    )
}

export default Alert;