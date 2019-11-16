import { CSSProperties } from "react";
import buttonFactory from "./buttonFactory";

const defaultStyle: CSSProperties = {
  color: "white",
  backgroundColor: "yellow"
};

const hoverStyle: CSSProperties = { color: "yellow", backgroundColor: "white" };

const style: CSSProperties = {
  ...defaultStyle,
  ...{ [`:hover`]: hoverStyle }
};

const WarningButton = buttonFactory(style);

export default WarningButton;
