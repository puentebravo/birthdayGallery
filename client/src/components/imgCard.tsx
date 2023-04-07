import React from "react";
import type { imgData } from "../utils/imageList";

function ImageCard(props: imgData) {


    return (
        <article className="container mx-auto mt-10 border-8 border-violet-600 rounded-lg w-auto h-auto">
            <img className="border-solid border-2 rounded border-white w-72 h-72 mx-auto" src={props.src} alt={props.alt} />
            <figcaption className="text-white text-center mt-2 ">{props.caption}</figcaption>
        </article>
    )
}

export default ImageCard;