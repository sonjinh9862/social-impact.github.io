<template>
  <Container>
    <TopNavDefault option="my" />
    <NCSContainer>
      <router-view> </router-view>
    </NCSContainer>
  </Container>
</template>

<script>
import TopNavDefault from "@/components/TopNav/TopNavDefault";
import styled from "vue3-styled-components";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NCSContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default {
  name: "Controller",
  components: { NCSContainer, TopNavDefault, Container },
  props: {},
  setup(props) {
    return { ...props };
  },
};
</script>
