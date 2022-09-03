import {setInputValueOne, setInputValueTwo, setMessages} from "../../redux/main/main.actions";
import {useDispatch, useSelector} from "react-redux"
import CustomInputComponent from "./CustomInputComponent";

const Main = () => {
    const dispatch = useDispatch()
    const inputValueOne = useSelector(state => state.main.inputValueOne)
    const inputValueTwo = useSelector(state => state.main.inputValueTwo)
    const messages = useSelector(state => state.main.messages)

    const changeInputValueOne = ({target}) => {

        dispatch(setInputValueOne(target.value))

    }

    const changeInputValueTwo = ({target}) => {
        dispatch(setInputValueTwo(target.value))
    }

    const addMessageOne = () => {
        if (inputValueOne.value) {
            dispatch(setMessages(inputValueOne))
            dispatch(setInputValueOne(""))
        }
    }
    const addMessageTwo = () => {
        if (inputValueTwo.value) {
            dispatch(setMessages(inputValueTwo))
            dispatch(setInputValueTwo(""))
        }
    }

    return <div className="container">
        <h1>Fast messages</h1>
        <div className="wrapper">
            <div className="text-areas-wrapper">
                <CustomInputComponent
                    title="User One"
                    initialValue={inputValueOne.value}
                    changeValue={changeInputValueOne}
                    addMessage={addMessageOne}
                />
                <CustomInputComponent
                    title="User Two"
                    initialValue={inputValueTwo.value}
                    changeValue={changeInputValueTwo}
                    addMessage={addMessageTwo}
                />
            </div>
        </div>
        <ul className="field">
            {messages.map((message, index) => <li className={message.user} key={index}>{message.value}</li>)}
        </ul>
    </div>
}

export default Main