<template>
  <Container>
    <Date>10월 넷째주</Date>
    <AppTitleArea>
      <SubTitle>오!동네 통합 멤버십</SubTitle>
      <AppTitle> 오.<b>동.통!</b> </AppTitle>
      <ExplainTitle>우리 동네 살찌우기 프로젝트 🤒</ExplainTitle>
    </AppTitleArea>
    <Notice> ? 공지사항 </Notice>
    <CardArea>
      <CardButtonLong
        :title="`이번 주\n살찌는\n멤버십.`"
        explain="새로운 멤버쉽이 업데이트 됐어요!"
        @click="pushRouter('/membership')"
      />
      <SubCardArea>
        <CardButtonDefault
          v-for="card in cards"
          :key="card.key"
          :title="card.title"
          :explain="card.explain"
          :badge="card.badge"
          :titleBackground="card.titleBackground"
          :src="card.src"
          @click="pushRouter(card.toRoutePath)"
        />
      </SubCardArea>
    </CardArea>
    <WeekTitle>이번 주 내가 다녀온 멤버십</WeekTitle>
    <Week>
      <BenefitCardHalf
        v-for="card in cardList"
        :key="card"
        :storeName="card.storeName"
        :storeBenefit="card.storeBenefit"
        :color="card.color"
      />
    </Week>
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import CardButtonLong from "@/components/CardButton/CardButtonLong";
import CardButtonDefault from "@/components/CardButton/CardButtonDefault";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import BenefitCardHalf from "@/components/BenefitCard/BenefitCardHalf";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Date = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 18px 24px 0 0;
  font-size: 12px;
  color: #797979;
`;

const AppTitleArea = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 24px;
`;

const SubTitle = styled("div")`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const AppTitle = styled("div")`
  font-size: 40px
  font-weight: 500;
  margin-bottom: 16px;
`;

const ExplainTitle = styled("div")`
  font-size: 20px;
  color: #797979;
`;

const Notice = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 54px;
  margin-top: 46px;
  font-size: 12px;
  color: #797979;
`;

const CardArea = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  gap: 24px;
  margin: 18px 24px 0 24px;
`;

const SubCardArea = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 25px;
  width: 45%;
`;

const Week = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: scroll;
  padding: 0 10px 0 10px;
`;

const WeekTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 20px;
  color: #797979;
  margin: 90px 24px 18px 24px;
`;

export default {
  components: {
    Container,
    CardArea,
    CardButtonLong,
    CardButtonDefault,
    SubCardArea,
    Date,
    AppTitleArea,
    SubTitle,
    AppTitle,
    ExplainTitle,
    Notice,
    Week,
    WeekTitle,
    BenefitCardHalf,
  },
  name: "Home",
  props: {},
  setup(props) {
    const cards = reactive([
      {
        key: 1,
        name: "benefits",
        title: `내가 받은\n혜택 리스트`,
        explain: "나의 혜택 리스트 확인하기",
        titleBackground: false,
        toRouteName: "NcsedBenefits",
        toRoutePath: "/ncs/benefits",
      },
      {
        key: 2,
        name: "map",
        title: `오동통,\n살찌는 지도`,
        explain: "살찌는~지도!",
        badge: "클릭!",
        titleBackground: true,
        src: "SI-landing",
        toRouteName: "NcsedMap",
        toRoutePath: "/ncs/map",
      },
    ]);

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

    const router = useRouter();
    const pushRouter = (toRoutePath) => {
      router.push({ path: toRoutePath });
    };

    return { ...props, cards, cardList, pushRouter };
  },
};
</script>
