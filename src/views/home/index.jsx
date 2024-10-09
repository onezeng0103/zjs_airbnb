import { memo, useEffect } from "react";
import { fetchHomeDataAction } from "@/store/modules/home";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HomeWrapper } from "./style";
import Banner from "./components/banner";
import SectionV1 from "./components/home-section-v1";
import SectionV2 from "./components/home-section-v2";
import SectionV3 from "./components/home-section-v3";
import LongFor from "./components/home-long-for";
import isEmptyObj from "@/utils/isEmptyObj";
const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendDestInfo,
    longForInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendDestInfo: state.home.hotRecommendDestInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <Banner />
      <div className="content">
        {isEmptyObj(discountInfo) && (
          <SectionV2 info={discountInfo} width={"33.333%"} />
        )}
        {isEmptyObj(hotRecommendDestInfo) && (
          <SectionV2 info={hotRecommendDestInfo} width={"33.333%"} />
        )}
        {isEmptyObj(longForInfo) && (
          <LongFor info={longForInfo} width={"20%"} />
        )}
        {isEmptyObj(goodPriceInfo) && (
          <SectionV1 info={goodPriceInfo} width={"25%"} />
        )}
        {isEmptyObj(highScoreInfo) && (
          <SectionV1 info={highScoreInfo} width={"25%"} />
        )}
        {isEmptyObj(plusInfo) && <SectionV3 info={plusInfo} width={"20%"} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
