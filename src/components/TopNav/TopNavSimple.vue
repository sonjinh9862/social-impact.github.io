<template>
  <Container>
    <Title>{{ title }}</Title>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 18px;
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  border-top: ${(props) =>
    props.borderLine == "top-bottom" ? "1px solid #e0e0e0" : ""};
  box-sizing: border-box;
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 15px
  font-weight: 900;
`;

export default {
  name: "TopNavSimple",
  components: {
    Container,
    Title,
  },
  props: {
    title: String,
  },
  setup(props) {
    return { ...props };
  },
};
</script>
