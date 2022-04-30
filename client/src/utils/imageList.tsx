import testImage from "../assets/images/placeHolder300.png"

interface imgData {
    src: string,
    caption: string,
    alt: string
}

const imgList: imgData[] = [
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: testImage,
        caption: "A test image",
        alt: "A block image measuring 300x300 pixels"
    },
]

export type {
    imgData, 
}

export {imgList}