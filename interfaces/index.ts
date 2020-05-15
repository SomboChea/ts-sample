import { IColor } from "./IColor";

interface HexColor extends IColor {
  hex: string;
}

class ColorRed implements HexColor {
  hex: string = "#EEFFBB";
  rgb: number;
}

function getColor(color: IColor) {
  console.log(color);
}

let color = new ColorRed()
color.hex = "#333eee"
color.rgb = 333333
getColor(color)
