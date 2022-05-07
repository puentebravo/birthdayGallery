import React from "react";
import { imgList } from "../utils/imageList"
import ImageCard from "./imgCard";


function GalleryContainer() {
    return (
        <section className="grid grid-cols-3 gap-6 ">
            {imgList.map( img => {
               return <ImageCard src={img.src} alt={img.alt} caption={img.caption}/>
            })}
        </section>
    )
}

export default GalleryContainer;