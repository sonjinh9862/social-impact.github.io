<template>
  <Container v-bind:src="src">
    <Explain v-if="explain">
      {{ explain }}
    </Explain>
    <Title v-if="title" v-bind:isExplain="explain">
      {{ title }}
    </Title>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 17px 23px;
  height: 435px;
  border-radius: 30px;
  background-image: url(${(props) =>
    props.src ? "src/assets/" + props.src + ".png" : ""});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => (props.src ? "" : "#D9D9D9")};
  box-sizing: border-box;
`;

const Explain = styled("div")`
  font-size: 10px;
  color: #ffffff;
  text-align: start;
  font-weight: 600;
  width: 100%;
`;

const Title = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.5;
  gap: 7px;
  margin-top: ${(props) => (props.isExplain ? "30px" : "41px")};
  font-size: 25px;
  font-weight: 900;
  color: #ffffff;
  text-align: left;
  white-space: pre;
`;

export default {
  name: "CardButtonLong",
  components: { Container, Explain, Title },
  props: {
    src: {
      type: String,
      default: "",
    },
    explain: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return { ...props };
  },
};
</script>
