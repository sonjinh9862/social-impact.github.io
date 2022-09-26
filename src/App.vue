<template>
  <AppContainer class="app">
    <LandingPC />
    <router-view class="view app"></router-view>
  </AppContainer>
</template>

<script>
import styled from "vue3-styled-components";
import landingImg from "@/assets/SI-landing.png";

const AppContainer = styled("div")`
  display: flex;
  width: 100%;
`;

const LandingPC = styled("div")`
  display: none;
  @media (min-width: 750px) {
    display: flex;
    background-image: url(${landingImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 500px;
    height: 1000px;
  }
`;

export default {
  name: "App",
  components: { AppContainer, LandingPC },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}

.view {
  width: 100%;
}
</style>
