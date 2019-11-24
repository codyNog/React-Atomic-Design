import styled from "@emotion/styled";
import { fontM } from "../../../constrants/style";

const InputFactory = styled("input")({
  fontSize: fontM,
  [`:focus`]: { outline: "none" }
});

export default InputFactory;
