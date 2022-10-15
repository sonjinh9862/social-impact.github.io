<template>
  <Container>
    <StyledInput placeholder="가고 싶은 가게를 검색해 보세요" />
    <Image src="Search" :width="20" />
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import Image from "@/components/Image";

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 20px 30px;
  z-index: 1;
  padding: 17px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.3));
`;

const StyledInput = styled("input")`
  flex-grow: 2;
  ::placeholder {
    color: #d9d9d9;
  }
  :focus {
    outline: none;
  }
  font-size: 16px;
  border: none;
`;

export default {
  name: "SearchBar",
  components: {
    Container,
    StyledInput,
    Image,
  },
  props: {},
  setup(props) {
    return { ...props };
  },
};
</script>
