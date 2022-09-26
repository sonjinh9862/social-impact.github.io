<template>
  <StyledImg :src="require(`@/assets/${src}.png`)" :width="width" />
</template>

<script>
import styled from "vue3-styled-components";

const StyledImg = styled("img")`
  width: ${(props) => (props.width ? props.width : "5px")};
`;

export default {
  name: "Image",
  components: { StyledImg },
  props: {
    src: String,
    width: Number,
  },
  setup(props) {
    return { ...props };
  },
};
</script>
