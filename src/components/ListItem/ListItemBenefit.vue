<template>
  <Container>
    <State>
      <StateChip :state="state">{{ state }}</StateChip>
      <Date>{{ date }}</Date>
    </State>
    <ContentContainer>
      <Image :src="src" width="106" height="106" radius="100" />
      <Store>
        <StoreName>{{ storeName }}</StoreName>
        <StoreExplain>{{ storeExplain }} </StoreExplain>
      </Store>
      <Benefit>
        {{ benefit }}
        <BenefitBar :color="barColor" />
      </Benefit>
    </ContentContainer>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import Image from "@/components/Image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 7px 27px 14px;
  flex-wrap: wrap;
  /* gap: 0 100px; */
`;

const State = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StateChip = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 20px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
  background-color: ${(props) =>
    props.state == "보관중" ? "#797979" : "#E0E0E0"};
  border-radius: 5px;
  margin-right: 7px;
`;

const Date = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  position: relative;
`;

const Store = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 24px;
`;

const StoreName = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const StoreExplain = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #797979;
`;

const Benefit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: absolute
  font-size: 60px;
  font-weight: 900;
  top: -50px;
  right: 10px;
`;

const BenefitBar = styled.div`
  position: absolute;
  background-color: ${(props) => (props.color ? props.color : "#6cce70")};
  width: 126px;
  height: 20px;
  border-radius: 5px;
  z-index: -1;
`;

export default {
  name: "ListItemBenefit",
  components: {
    Container,
    State,
    Benefit,
    Store,
    StateChip,
    Date,
    BenefitBar,
    ContentContainer,
    StoreName,
    StoreExplain,
    Image,
  },
  props: {
    state: String,
    date: String,
    src: String,
    storeName: String,
    storeExplain: String,
    benefit: String,
    barColor: String,
  },
  setup(props) {
    return { ...props };
  },
};
</script>

<style></style>
