import styled from "@emotion/styled";
import buttonFactory from "../buttonFactory";

const Button = styled(buttonFactory)({
  color: "white",
  backgroundColor: "blue",
  [`:hover`]: { color: "blue", backgroundColor: "white" }
});
export default Button;
