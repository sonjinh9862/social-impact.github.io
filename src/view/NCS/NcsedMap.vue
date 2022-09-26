<template>
  <Container> </Container>
</template>

<script>
import styled from "vue3-styled-components";

const Container = styled("div")`
  display: flex;
`;

export default {
  name: "NcsedMap",
  components: {
    Container,
  },
  props: {},
  setup(props) {
    return { ...props };
  },
};
</script>
