import React, { useState } from "react";
import type { imgData } from "../utils/imageList";
import Modal from "./modal";

function ImageCard(props: imgData) {

    const [show, setShow] = useState<boolean>(false)

    const handleOpen = () => {
        setShow(true)
        
    }


    return (
        <>
            <article className="container mx-auto mt-10 border-4 border-violet-600 rounded-lg w-auto h-auto">
                <img className="border-solid border-2 rounded border-white w-72 h-72 mx-auto" src={props.src} alt={props.alt} />
                <figcaption className="text-white text-center mt-2 ">{props.caption}</figcaption>
                <button className="w-full bg-violet-600 text-white mt-2 shadow-lg shadow-violet-600/50" onClick={handleOpen}>Zoom In</button>
            </article>
            <Modal status={show} setStatus={setShow} imgAlt={props.alt} imgCaption={props.caption} imgSrc={props.src} />
        </>
    )
}

export default ImageCard;