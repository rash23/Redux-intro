const CustomInputComponent = (props) => {
    return (
        <div className="text-area-wrapper">
            <p>{props.title}</p>
            <textarea value={props.initialValue} onChange={props.changeValue}/>
            <button className="button" onClick={props.addMessage}>Send</button>
        </div>)
}

export default CustomInputComponent