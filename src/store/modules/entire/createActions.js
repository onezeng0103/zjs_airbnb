import * as constants from "./constants";
import { getEntireList } from "@/api/entire.js";
export const handlePageNumAction = (pageNum) => {
  return {
    type: constants.HANDLE_PAGE_NUM,
    pageNum,
  };
};
export const handleTotalAction = (total) => {
  return {
    type: constants.HANDLE_TOTAL,
    total,
  };
};
export const handleLoadingAction = (loading) => {
  return {
    type: constants.HANDLE_LOADING,
    loading,
  };
};
export const handleListAction = (page = 0) => {
  window.scrollTo(0, 0);
  return (dispatch) => {
    const offset = page * 20;
    dispatch(handleLoadingAction(true));
    getEntireList(offset).then((res) => {
      dispatch({
        type: constants.HANDLE_LIST,
        list: res.list,
      });
      dispatch(handleTotalAction(res.totalCount));
      dispatch(handlePageNumAction(page));
      dispatch(handleLoadingAction(false));
    });
  };
};
