<template>
  <Container>
    <TopNavSimple title="나의 혜택 리스트" />
    <ListItemBenefit
      v-for="store in storeList"
      :key="store"
      :state="store.state"
      :date="store.date"
      :src="store.src"
      :storeName="store.storeName"
      :storeExplain="store.storeExplain"
      :benefit="store.benefit"
      :barColor="store.barColor"
    />
  </Container>
</template>

<script>
import styled from "vue3-styled-components";
import { reactive } from "vue";
import ListItemBenefit from "@/components/ListItem/ListItemBenefit.vue";
import TopNavSimple from "@/components/TopNav/TopNavSimple.vue";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 10px;
`;

export default {
  name: "NcsedBenefits",
  components: {
    Container,
    ListItemBenefit,
    TopNavSimple,
  },
  props: {},
  setup(props) {
    const storeList = reactive([
      {
        state: "보관중",
        date: "9월 첫째주",
        src: "food",
        storeName: "카레집",
        storeExplain: "전농동 103-160",
        benefit: "20%",
        barColor: "#FFE587",
      },
      {
        state: "보관중",
        date: "8월 넷째주",
        src: "food",
        storeName: "카레집",
        storeExplain: "전농동 103-160",
        benefit: "20%",
      },
      {
        state: "사용 완료",
        date: "8월 셋째주",
        src: "food",
        storeName: "카레집",
        storeExplain: "전농동 103-160",
        benefit: "20%",
        barColor: "#FFE587",
      },
      {
        state: "사용 완료",
        date: "8월 둘째주",
        src: "food",
        storeName: "카레집",
        storeExplain: "전농동 103-160",
        benefit: "20%",
      },
      {
        state: "보관중",
        date: "8월 첫째주",
        src: "food",
        storeName: "카레집",
        storeExplain: "전농동 103-160",
        benefit: "20%",
      },
      {
        state: "보관중",
        date: "7월 넷째주",
        src: "food",
        storeName: "카레집",
        storeExplain: "전농동 103-160",
        benefit: "20%",
        barColor: "#FFE587",
      },
      {
        state: "사용 완료",
        date: "7월 셋째주",
        src: "food",
        storeName: "카레집",
        storeExplain: "전농동 103-160",
        benefit: "20%",
      },
    ]);

    return { ...props, storeList };
  },
};
</script>
