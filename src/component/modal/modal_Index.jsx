import React from 'react';
import Modal from 'react-responsive-modal';
import FormPostulez from './Forms/FormPostulez';
import FormRecrutez from './Forms/FormPostulez';

const Modal_Index = ({ open, handleModal, type }) => {


    return (
        <Modal open={open} onClose={() => handleModal()} center>
            {type === "postulez" ?
                <FormPostulez />
                : <FormRecrutez />
            }
        </Modal>
    )
}

export default Modal_Index;