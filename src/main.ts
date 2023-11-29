import "./style.scss";
import confetti, {Options} from "canvas-confetti";
import Colorthief from "colorthief";


//create an options object

const options : Options = {
    particleCount: 10,
    spread:180, 
    colors: ["#ee2fbe", "#abe2de", "#65ae3c"]
}

confetti(options);

const confettiButton = document.querySelector<HTMLCanvasElement>(".confetti-canvas");
const dogImage = document.querySelector("#dog-image") as HTMLImageElement;

if (!confettiButton || !dogImage) {
    throw new Error ("issues with selector")
}

//CREATE NEW TYPES FOR COLORTHIEF PACKAGE

type Color = [number, number, number];

type Colortheif = {
    getColor: (img:HTMLImageElement, quality?:number) => Color;
    getPalette: 
    (img: HTMLImageElement, 
     colorCount?: number,
     quality?:number)
     => Color[];
}

const getRandomNumberInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  
  const fireConfetti = () => {
    const confettiOptions: Options = {
      particleCount: getRandomNumberInRange(50, 100),
      angle: getRandomNumberInRange(55, 125),
      spread: getRandomNumberInRange(50, 70),
      origin: { y: 0.6 },
      colors: ["#ee2fbe", "#abe2de", "#65ae3c"],
    };
  
    confetti(confettiOptions);
  };
  
  const handleConfettiPress = () => {
    fireConfetti();
  };

  const colortheif : Colortheif = new Colorthief();

const onImageLoad = () => {
    const color = colortheif.getColor(dogImage)
    console.log(color)
}

//CHECK THAT THE IMAGE IS LOADED FULLY

if(dogImage.complete){
    onImageLoad()
} else{
    dogImage.addEventListener("load", onImageLoad)
}
    
  
confettiButton.addEventListener("click", handleConfettiPress);

