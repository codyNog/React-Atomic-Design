import styled from "@emotion/styled";
import { CSSProperties } from "@emotion/serialize";

/* const buttonFactory = (style: CSSProperties) => {
  return styled("button")({
    ...{
      fontSize: 20,
      fontWeight: "bold",
      borderRadius: 20,
      display: "block",
      [`:focus`]: { outline: "none" }
    },
    ...style
  });
}; */

const buttonFactory = styled("button")({
  fontSize: 20,
  fontWeight: "bold",
  borderRadius: 20,
  display: "block",
  [`:focus`]: { outline: "none" }
});

export default buttonFactory;
