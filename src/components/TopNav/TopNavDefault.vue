<template>
  <Container :borderLine="borderLine">
    <Image :src="navigator" :width="10" />
    <Title> 오! <b>동</b>네 <b>통</b>합 멤버십 </Title>
    <Option>
      <Image src="MyIcon" :width="15" />
      <OptionText>MY</OptionText>
    </Option>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import Image from "@/components/Image";

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
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

const Title = styled("div")`
  font-size: 15px
  font-weight: 400;
  flex-grow: 2;
`;

const Option = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OptionText = styled("div")`
  font-size: 10px;
  color: #797979;
  font-weight: 300;
  text-align: center;
`;

export default {
  components: { Container, Image, Title, Option, OptionText },
  name: "TopNavDF",
  props: {
    navigator: {
      type: String,
      default: "back-arrow",
    },
    contentArea: {
      type: String,
      default: "middle-title",
    },
    borderLine: {
      type: String,
      default: "bottom",
    },
    option: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return { ...props };
  },
};
</script>
