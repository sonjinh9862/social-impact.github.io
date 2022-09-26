<template>
  <TopNavDefault />
  <NCSContainer>
    <router-view class="view NCSed-content"> </router-view>
  </NCSContainer>
</template>

<script>
import TopNavDefault from "@/components/TopNav/TopNavDefault";
import styled from "vue3-styled-components";

const NCSContainer = styled("div")`
  display: flex;
`;

export default {
  name: "Controller",
  components: { NCSContainer, TopNavDefault },
  props: {},
  setup(props) {
    return { ...props };
  },
};
</script>
