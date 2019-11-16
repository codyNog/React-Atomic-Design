import buttonFactory from "./buttonFactory";
import { CSSProperties } from "@emotion/serialize";

const defaultStyle: CSSProperties = { color: "white", backgroundColor: "blue" };

const hoverStyle: CSSProperties = { color: "blue", backgroundColor: "white" };

const style: CSSProperties = {
  ...defaultStyle,
  ...{ [`:hover`]: hoverStyle }
};

const Button = buttonFactory(style);

export default Button;
