import request from "@/utils/request.js";
export function getEntireList(offset = 0, size = 20) {
  return request({
    url: "/entire/list",
    method: "get",
    params: {
      offset,
      size,
    },
  });
}
