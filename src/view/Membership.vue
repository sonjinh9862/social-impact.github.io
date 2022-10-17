<template>
  <Container>
    <TopDiv>
      <Image src="back-x" :width="18" @click="pushRouter('/')" />
    </TopDiv>
    <Title>할인 받고 싶은 가게를<br />인증하세요</Title>
    <SubTitle>멤버십 3곳을 이용하고 추가 혜택을 받으세요.</SubTitle>
    <ContentContainer>
      <BenefitCardDefault
        v-for="card in cardList"
        :key="card"
        :storeName="card.storeName"
        :storeBenefit="card.storeBenefit"
        :color="card.color"
      />
    </ContentContainer>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import Image from "@/components/Image";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import BenefitCardDefault from "@/components/BenefitCard/BenefitCardDefault";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 32px 24px;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 7px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 23px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 12px;
  color: #797979;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 26px;
  margin-top: 63px;
`;

export default {
  name: "Membership",
  components: {
    Container,
    TopDiv,
    Title,
    SubTitle,
    Image,
    ContentContainer,
    BenefitCardDefault,
  },
  props: {},
  setup(props) {
    const router = useRouter();
    const pushRouter = (toRoutePath) => {
      router.push({ path: toRoutePath });
    };

    const cardList = reactive([
      {
        storeName: "카레집",
        storeBenefit: "10%",
      },
      {
        storeName: "카레집",
        storeBenefit: "음료수 1캔",
      },
      {
        storeName: "카레집",
        storeBenefit: "돈까스 무료",
        color: "#FFCF88",
      },
      {
        storeName: "카레집",
        storeBenefit: "20%",
        color: "#FFCF88",
      },
      {
        storeName: "카레집",
        storeBenefit: "30%",
        color: "#904DC5",
      },
      {
        storeName: "카레집",
        storeBenefit: "35%",
        color: "#904DC5",
      },
    ]);
    return { ...props, pushRouter, cardList };
  },
};
</script>
