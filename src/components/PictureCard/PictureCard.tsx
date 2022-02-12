import React, { useState } from "react";
import { iPictureCard } from "../../interfaces/picturesTypes";
import { PictureBasicModal } from "./PictureBasicModal/PictureBasicModal";
import  "./PictureCard.css"



export const PictureCard = ({thumbnailUrl, title, url, id, handleDeleteItem}:iPictureCard) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    
    return (
        <>
          <div className="card">
                <img src={thumbnailUrl} alt="" onClick={handleOpen}/>
                <PictureBasicModal 
                    openModal={openModal} 
                    handleClose={handleClose} 
                    url={url}
                />
                <div className="container">
                    <p>{id}</p>
                    <h4><b>{title}</b></h4>
                    <button
                        className="cardButton"
                        type="submit"
                        onClick={(e)=> {
                            handleDeleteItem(id, e)
                        }}
                    >
                        Delete
                    </button> 
                </div>
            </div>        
        </>
    )
}