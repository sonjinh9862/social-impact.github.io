<template>
  <StyledImg
    :src="require(`@/assets/${src}.png`)"
    :width="width"
    :height="height"
    :radius="radius"
  />
</template>

<script>
import styled from "vue3-styled-components";

const StyledImg = styled("img")`
  width: ${(props) => (props.width ? props.width : "5px")};
  height: ${(props) => props.height && props.height};
  border-radius: ${(props) => props.radius && props.radius + "px"};
`;

export default {
  name: "Image",
  components: { StyledImg },
  props: {
    src: String,
    width: Number,
    height: Number,
    radius: Number,
  },
  setup(props) {
    return { ...props };
  },
};
</script>
