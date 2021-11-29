import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AboutCard from "../components/about/AboutCard";
import aboutMock from "../__mocks__/aboutMock";

const StyleBox = styled(Box)({
  padding: "1.5em",
  // backgroundColor: '#cfe8fc',
  height: "100vh",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  alignContent: "flex-start",
  flexDirection: "colurmn",
});

export default function About() {
  return (
    <React.Fragment>
      <Container>
        <StyleBox>
          {aboutMock.map((about) => (
            <AboutCard about={about} />
          ))}
        </StyleBox>
      </Container>
    </React.Fragment>
  );
}
