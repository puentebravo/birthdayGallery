import abstractColor from "../assets/images/abstractColors.jpg";
import affirmations from "../assets/images/affirmations.jpg"
import april from "../assets/images/april.jpg"
import christmas from "../assets/images/christmas.jpg"
import coffee from "../assets/images/coffee.jpg";
import gratitude from "../assets/images/gratitude.jpg"
import kFiorito from "../assets/images/kfiorito.jpg"
import mayaSwing from "../assets/images/mayaSwing.jpg"
import ruby1 from "../assets/images/ruby1.jpg"
import ruby2 from "../assets/images/ruby2.jpg"
import spiralCube from "../assets/images/spiralCube.jpg"
import vanGogh from "../assets/images/vanGogh.jpg"
import zoom from "../assets/images/zoom.jpg"
import runningTime from "../assets/images/runningTime.jpg"

interface imgData {
    src: string,
    caption: string,
    alt: string
}

const imgList: imgData[] = [
    {
        src: abstractColor,
        caption: "Abstract Colors, flowing",
        alt: "Abstract colors, flowing around the page"
    },
    {
        src: affirmations,
        caption: "Powerful affirmations",
        alt: "Words of affirmation drawn on the outline of a hand"
    },
    {
        src: april,
        caption: "A Self Portrait",
        alt: "A self portrait of the artist"
    },
    {
        src: christmas,
        caption: "Christmas Time",
        alt: "An image of a childhood christmas tree"
    },
    {
        src: coffee,
        caption: "Coffee in charcoal",
        alt: "coffee cups drawn using charcoal"
    },
    {
        src: gratitude,
        caption: "Words of Gratitude",
        alt: "A block image measuring 300x300 pixels"
    },
    {
        src: kFiorito,
        caption: "A drawing of Kathleen Fiorito",
        alt: "colored pencil drawing of Kathleen Fiorito and her dog"
    },
    {
        src: mayaSwing,
        caption: "Maya Caballero on her iconic swing",
        alt: "The folk rock artist Maya Caballero performing on her iconic floating swingset"
    },
    {
        src: ruby1,
        caption: "A tale of the past, Part 1",
        alt: "A tale from April's past, part 1"
    },
    {
        src: ruby2,
        caption: "A tale of the past, Part 2",
        alt: "A tale from april's past, part 2"
    },
    {
        src: spiralCube,
        caption: "Colors spiraling into beyond",
        alt: "Colors spiraling behind a blue cube"
    },
    {
        src: runningTime,
        caption: "Time, Running through eternity",
        alt: "A colorful image of a clock, running through the universe"
    },
    {
        src: vanGogh,
        caption: "A mysterious, Red haired figure",
        alt: "A drawing of an unnamed, red-haired person"
    },
    {
        src: zoom,
        caption: "Near or far, we all stick together",
        alt: "A drawing of a zoom video call"
    },
]

export type {
    imgData,
}

export { imgList }