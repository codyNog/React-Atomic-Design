import styled from "@emotion/styled";
import { fontM } from "../../../constrants/style";

const InputFactory = styled("input")({
  fontSize: fontM,
  display: "block",
  [`:focus`]: { outline: "none" }
});

export default InputFactory;
