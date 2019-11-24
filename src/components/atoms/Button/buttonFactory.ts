import styled from "@emotion/styled";

const buttonFactory = styled("button")({
  fontSize: 20,
  fontWeight: "bold",
  borderRadius: 20,
  display: "block",
  [`:focus`]: { outline: "none" }
});

export default buttonFactory;
