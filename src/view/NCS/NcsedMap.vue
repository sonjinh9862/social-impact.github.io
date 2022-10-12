<template>
  <Container>
    <MapDiv id="map">
      <StyledSearchBar>
        <SearchBarDefault />
        <ScrollDiv @scroll="handleScroll"> </ScrollDiv>
      </StyledSearchBar>
    </MapDiv>
  </Container>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";
import styled from "vue3-styled-components";
// import { destroyed } from "vue";
import SearchBarDefault from "@/components/SearchBar/SearchBarDefault";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-between;
`;

const MapDiv = styled("div")`
  width: 100%;
  height: 900px;
`;

const StyledSearchBar = styled("div")`
  position: relative;
  margin: 20px 30px;
`;

const ScrollDiv = styled("div")`
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    Container,
    MapDiv,
    StyledSearchBar,
    SearchBarDefault,
    ScrollDiv,
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

    // window.addEventListener("scroll");
    // destroyed(() => {});
    return { ...props, map };
  },
};
</script>
