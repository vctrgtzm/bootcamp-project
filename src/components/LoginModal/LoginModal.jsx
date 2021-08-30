import ReactDOM from 'react-dom';
import { FormContainer, Modal, Overlay, Logo, CloseButton, Input, Button, ErrorContainer } from "./LoginModal.styled";
import logo from '../../logo.png';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import loginApi from '../../api/login.api';
import GlobalContext from '../../state/context';
import actionTypes from '../../state/actionTypes';

function LoginModal({ show, onClose }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { globalDispatch, globalState } = useContext(GlobalContext);

    const handleLoginClick = () => {
        setError(null);
        loginApi(user, password).then((user) => {
            //add pending fav if exists
            if(globalState.pendingFav){
                user.favoriteVideos.push(globalState.pendingFav);
            }
            globalDispatch({ type: actionTypes.USER_LOGIN, payload: user });
            setUser('');
            setPassword('');
            localStorage.setItem("user", JSON.stringify(user));            
            onClose();
        }).catch((error) => {
            setError(error);
        });
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            handleLoginClick();
        }
    }

    return show && ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose} />
            <Modal>
                <FormContainer>
                    <CloseButton
                        icon={faTimes}
                        onClick={onClose}
                    />
                    <Logo role="img" alt="the icon of the app" src={logo} />
                    <Input
                        type="text"
                        placeholder="User"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        onKeyDown={handleKeyDown}
                    />
                    <Button onClick={handleLoginClick}>Login</Button>
                    {error && <ErrorContainer>{error.message}</ErrorContainer>}
                </FormContainer>
            </Modal>
        </>
        ,
        document.getElementById('modal-portal')
    );

}

export default LoginModal;
