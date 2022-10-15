<template>
  <Container>
    <MapDiv id="map">
      <ContentContainer>
        <StyledSearchBar />
        <ScrollDiv :scrollValue="isScrolled">
          <TabDiv @click="isScrolled == 200 ? scrolling(700) : scrolling(200)">
            <TabBar />
          </TabDiv>
          <ContentTitle>오늘의 추천 맛집</ContentTitle>
          <Store :scrollValue="isScrolled">
            <ImageCardDefault
              v-for="store in storeList"
              :key="store"
              :src="store.src"
              :title="store.title"
              :explain="store.explain"
            />
          </Store>
        </ScrollDiv>
      </ContentContainer>
    </MapDiv>
  </Container>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";
import styled from "vue3-styled-components";
import { ref, reactive } from "vue";
import ImageCardDefault from "@/components/ImageCard/ImageCardDefault";
import SearchBarDefault from "@/components/SearchBar/SearchBarDefault";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

const MapDiv = styled("div")`
  width: 100%;
  height: calc(100vh - 55px);
`;

const StyledSearchBar = styled(SearchBarDefault)``;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  height: 100%;
`;

const ScrollDiv = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  bottom: 0px;
  position: absolute;
  z-index: 101;
  width: 100%;
  height: ${(props) => props.scrollValue + "px"};
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #ffffff;
  transition: ease-out 0.5s;
`;

const TabDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 0 36px 0;
`;

const TabBar = styled.div`
  width: 50px;
  height: 4px;
  background-color: #e1e1e1;
  border-radius: 10px;
`;

const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 800;
  padding: 0 30px 20px 30px;
`;

const Store = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 30px 35px 30px;
  flex-wrap: wrap;
  overflow: ${(props) => (props.scrollValue == 200 ? "hidden" : "scroll")};
  gap: 20px;
`;

export default {
  components: {
    Container,
    MapDiv,
    StyledSearchBar,
    ScrollDiv,
    TabDiv,
    TabBar,
    ContentContainer,
    ContentTitle,
    Store,
    ImageCardDefault,
  },
  name: "NcsedMap",
  props: {},
  setup(props) {
    var map = null;
    loadScript(
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=bvvfi6im1u"
    )
      .then(() => {
        map = new window.naver.maps.Map("map", {
          center: new window.naver.maps.LatLng(37.584002, 127.05566),
          zoom: 16,
        });
        console.log(map);
        console.log("hello");
      })
      .catch((err) => {
        console.log(err);
      });

    const isScrolled = ref(200);
    const scrolling = (scrollValue) => {
      isScrolled.value = scrollValue;
    };

    const storeList = reactive([
      {
        src: "food",
        title: "카레집",
        explain: "전농동 103-160 ",
      },
      {
        src: "food",
        title: "카레집",
        explain: "전농동 103-160 ",
      },
      {
        src: "food",
        title: "카레집",
        explain: "전농동 103-160 ",
      },
      {
        src: "food",
        title: "카레집",
        explain: "전농동 103-160 ",
      },
      {
        src: "food",
        title: "카레집",
        explain: "전농동 103-160 ",
      },
      {
        src: "food",
        title: "카레집",
        explain: "전농동 103-160 ",
      },
      {
        src: "food",
        title: "카레집",
        explain: "전농동 103-160 ",
      },
    ]);
    return { ...props, map, isScrolled, scrolling, storeList };
  },
};
</script>
