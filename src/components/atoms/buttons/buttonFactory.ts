import styled from "@emotion/styled";
import { CSSProperties } from "@emotion/serialize";

const buttonFactory = (style: CSSProperties) => {
  return styled("button")({
    ...{ fontSize: 20, fontWeight: "bold", borderRadius: 20, display: "block" },
    ...style
  });
};

export default buttonFactory;
