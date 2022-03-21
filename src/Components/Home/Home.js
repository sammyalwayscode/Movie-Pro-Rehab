import React from "react";
import styled from "styled-components";
import ImgSlider from "../ImgSlider/ImgSlider";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Recomend from "../Recomended/Recomend";
import Trending from "../Trending/Trending";
import Viewers from "../Viewers/Viewers";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recomend />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    background: url("/Assets/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
