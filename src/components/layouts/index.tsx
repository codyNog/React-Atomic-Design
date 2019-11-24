import styled from "@emotion/styled";
import { marginL, paddingL } from "../../constrants/style";

const Page = styled("div")({
  display: "flex"
});

const Section = styled("section")({
  padding: paddingL,
  marginBottom: marginL
});

const Content = styled("div")({
  height: "100vh",
  width: "100%",
  overflow: "hidden scroll"
});

const Columns = styled("div")({
  display: "flex"
});

const Rows = styled("div")({
  display: "flex",
  flexDirection: "row"
});

export { Page, Section, Content, Columns, Rows };
