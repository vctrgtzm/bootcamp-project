import ReactDOM from 'react-dom';
import { FormContainer, Modal, Overlay, Logo, CloseButton, Input, Button } from "./LoginModal.styled";
import logo from '../../logo.png';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function LoginModal({ show, onClose }) {

    return show && ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose} />
            <Modal>
                <FormContainer>
                    <CloseButton
                        icon={faTimes}
                        size="md"
                        onClick={onClose}
                    />
                    <Logo role="img" alt="the icon of the app" src={logo} />
                    <Input
                        type="text"
                        placeholder="User"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                    />
                    <Button>Login</Button>
                </FormContainer>
            </Modal>
        </>
        ,
        document.getElementById('modal-portal')
    );

}

export default LoginModal;
