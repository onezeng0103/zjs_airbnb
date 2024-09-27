import request from "@/utils/request.js"
export const getHotrecommenddest = () => {
  return request({
    url: "/home/hotrecommenddest",
    method: "get"
  })
}