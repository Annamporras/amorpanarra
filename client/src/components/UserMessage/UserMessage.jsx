import { useContext } from "react"
import { Toast } from 'react-bootstrap'
import { MessageContext } from '../../context/UserMessage.context'

const UserMessage = () => {

    const { showMessage, setShowMessage, messageInfo } = useContext(MessageContext)


    return (
        <Toast onClose={() => setShowMessage(false)} show={showMessage} delay={3000} autohide style={{ position: 'fixed', left: 10, top: 300 }}>
            <Toast.Header>
                <strong className="me-auto">{messageInfo.title}</strong>
            </Toast.Header>
            <Toast.Body>{messageInfo.desc}</Toast.Body>
        </Toast>

    )
}

export default UserMessage