<template>
  <Container
    v-bind:srcUrl="src ? require(`@/assets/${src}.png`) : ''"
    :isSrc="src"
  >
    <BlackBgColor v-bind:color="titleBackground">
      <Title v-if="title">
        {{ title }}
        <Badge v-if="badge">
          {{ badge }}
        </Badge>
      </Title>
      <Explain v-if="explain">
        {{ explain }}
      </Explain>
    </BlackBgColor>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 30px;
  height: 205px;
  background-image: url(${(props) => (props.srcUrl ? `${props.srcUrl}` : "")});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => (props.isSrc ? "" : "#D9D9D9")};
  box-sizing: border-box;
  overflow: hidden;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.3));
  box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

const Explain = styled("div")`
  font-size: 3px;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  text-align: start;
  width: 100%;
`;

const Title = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.2;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  white-space: pre;
`;

const Badge = styled("div")`
  position: absolute;
  margin-left: 60px;
  transform: rotate(40deg);
  font-size: 10px;
  font-weight: 600;
  color: #ffffff;
`;

const BlackBgColor = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7px 17px 0 17px;
  width: 100%;
  height: 84px;
  background-color: ${(props) => (props.color ? `rgba(0, 0, 0, 0.4)` : "")};
`;

export default {
  name: "CardButtonDefault",
  components: { Container, Explain, Title, Badge, BlackBgColor },
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
    badge: {
      type: String,
      default: "",
    },
    titleBackground: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props) {
    const imgUrl = "src/assets/" + props.src + ".png";
    return { ...props, imgUrl };
  },
};
</script>
