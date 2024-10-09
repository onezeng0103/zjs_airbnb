import * as constants from "./constants";
const initialState = {
  //初始化状态
  total: 0,
  pageNum: 0,
  list: [],
  loading: false,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.HANDLE_TOTAL:
      return { ...state, total: action.total };
    case constants.HANDLE_PAGE_NUM:
      return {
        ...state,
        pageNum: action.pageNum,
      };
    case constants.HANDLE_LIST:
      return { ...state, list: action.list };
    case constants.HANDLE_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
export default reducer;
