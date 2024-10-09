import request from "@/utils/request.js";
export const getGoodPrice = () => {
  return request({
    url: "/home/goodprice",
    method: "get",
  });
};
export const getHighScore = () => {
  return request({
    url: "/home/highscore",
    method: "get",
  });
};
export const getDiscount = () => {
  return request({
    url: "/home/discount",
    method: "get",
  });
};
export const getHotRecommendDest = () => {
  return request({
    url: "/home/hotrecommenddest",
    method: "get",
  });
};
export const getLongFor = () => {
  return request({
    url: "/home/longfor",
    method: "get",
  });
};
export const getPlus = () => {
  return request({
    url: "/home/plus",
    method: "get",
  });
};
