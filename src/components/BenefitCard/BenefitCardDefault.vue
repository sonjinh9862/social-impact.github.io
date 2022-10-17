<template>
  <Container :color="color">
    <Image src="food" :width="50" :height="50" :radius="100" />
    <StoreName class="name">{{ storeName }}</StoreName>
    <StoreBenefit>{{ storeBenefit }}</StoreBenefit>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import Image from "@/components/Image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  background-color: ${(props) => (props.color ? props.color : "#6cce70")};
  border-radius: 30px;
  padding: 26px;
  width: 20%;
`;

const StoreName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 5vh;
`;

const StoreBenefit = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  color: #ffffff;
`;

export default {
  name: "Membership",
  components: {
    Container,
    Image,
    StoreName,
    StoreBenefit,
  },
  props: {
    storeName: String,
    storeBenefit: String,
    color: String,
  },
  setup(props) {
    return { ...props };
  },
};
</script>
