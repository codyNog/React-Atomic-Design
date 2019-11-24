import styled from "@emotion/styled";
import buttonFactory from "../buttonFactory";

const WarningButton = styled(buttonFactory)({
  color: "white",
  backgroundColor: "yellow",
  [`:hover`]: { color: "yellow", backgroundColor: "white" }
});

export default WarningButton;
