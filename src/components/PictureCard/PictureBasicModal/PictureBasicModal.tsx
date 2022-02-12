import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {style} from "./style"
import { iModal } from "../../../interfaces/picturesTypes";



export const PictureBasicModal = ({openModal, handleClose, url}:iModal) => {
    return (
        <>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Image in a modal
                    </Typography>
                    <img src={url} alt="" />
                </Box>              
            </Modal>

        </>
    )
}