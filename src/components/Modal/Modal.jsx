import { Overlay, ModalEl, Image } from './Modal.styled';
import { useEffect } from 'react';
import PropTypes from "prop-types";
export const Modal = ({onClose, largeImageURL, tag })=>  {
    useEffect(()=>{
        window.addEventListener('keydown', keyDown);
        return ()=>{window.removeEventListener('keydown', keyDown)};
    }) 


    const keyDown = event => {
        if (event.code === "Escape") {
            onClose();
        }
    };

   const backdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    }
     return (
            <Overlay onClick={backdropClick}>
                <ModalEl>
                   <Image src={largeImageURL} alt={tag} />
                </ModalEl>
            </Overlay>
        );
    } 
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tag: PropTypes.string,
}