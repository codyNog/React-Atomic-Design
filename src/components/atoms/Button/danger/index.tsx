import styled from "@emotion/styled";
import buttonFactory from "../buttonFactory";

const DangerButton = styled(buttonFactory)({
  color: "white",
  backgroundColor: "red",
  [`:hover`]: { color: "red", backgroundColor: "white" }
});

export default DangerButton;
