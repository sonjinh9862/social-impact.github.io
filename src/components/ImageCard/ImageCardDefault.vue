<template>
  <Container>
    <StyledImage :src="src" width="18vh" />
    <Title> {{ title }} </Title>
    <Explain> {{ explain }} </Explain>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import Image from "@/components/Image.vue";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
`;

const StyledImage = styled(Image)`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 30px;
  margin-bottom: 6px;
`;

const Title = styled.div`
  font-size: 20px;
  color: #797979;
  margin-bottom: 6px;
`;

const Explain = styled.div`
  font-size: 12px;
  color: #797979;
  margin-bottom: 6px;
`;

export default {
  name: "ImageCard",
  components: {
    Container,
    StyledImage,
    Title,
    Explain,
  },
  props: {
    src: String,
    contentArea: String,
    title: String,
    explain: String,
  },
  setup(props) {
    return { ...props };
  },
};
</script>
