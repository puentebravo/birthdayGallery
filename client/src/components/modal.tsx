import React from "react";




interface modalOpts {
    status: boolean,
    setStatus: (params: any) => any,
    imgSrc: string,
    imgAlt: string,
    imgCaption: string
}


function Modal(props: modalOpts) {


    const handleClose = () => {
        props.setStatus(false)
    }
    

    return (
        <section className={`modal ${props.status ? 'show' : ""}`} onClick={handleClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title font-cursive">A Closer Look</h3>
                </div>
                <div className="modal-body">
                    <img className="w-fit mx-auto"  src={props.imgSrc} alt={props.imgAlt}/>
                    <figcaption className="text-white text-center mt-2">{props.imgCaption}</figcaption>
                </div>
                <div className="modal-footer">
                    <button className="w-full bg-violet-600 text-white rounded-b-md" onClick={handleClose}>Close</button>
                </div>

            </div>
        </section>
    )
}

export default Modal;