import { CSSProperties } from "react";
import buttonFactory from "./buttonFactory";

const defaultStyle: CSSProperties = { color: "white", backgroundColor: "red" };

const hoverStyle: CSSProperties = { color: "red", backgroundColor: "white" };

const style: CSSProperties = {
  ...defaultStyle,
  ...{ [`:hover`]: hoverStyle }
};

const DangerButton = buttonFactory(style);

export default DangerButton;
