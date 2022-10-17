<template>
  <Container :color="color">
    <Image src="food" :width="50" :height="50" :radius="100" />
    <Content>
      <StoreName class="name">{{ storeName }}</StoreName>
      <StoreBenefit>{{ storeBenefit }}</StoreBenefit>
    </Content>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import Image from "@/components/Image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => (props.color ? props.color : "#6cce70")};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin: 0 10px 0 10px;
  padding: 26px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 12px;
`;

const StoreName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

const StoreBenefit = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  color: #ffffff;
  width: max-content;
`;

export default {
  name: "Membership",
  components: {
    Container,
    Image,
    StoreName,
    StoreBenefit,
    Content,
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
