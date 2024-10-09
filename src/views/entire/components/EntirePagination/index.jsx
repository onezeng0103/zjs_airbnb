import { memo, useCallback } from "react";
import { Pagination } from "@mui/material";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { handleListAction } from "@/store/modules/entire/createActions";
import { EntirePaginationWrapper } from "./style";
const EntirePagination = memo(() => {
  const { total, pageNum } = useSelector(
    (state) => ({
      total: state.entire.total,
      pageNum: state.entire.pageNum,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (_event, value) => {
      dispatch(handleListAction(value - 1));
    },
    [dispatch]
  );
  const count = Math.floor(total / 20);
  const start = pageNum * 20 + 1;
  const end = (pageNum + 1) * 20;
  return (
    <EntirePaginationWrapper>
      <Pagination count={count} color="primary" onChange={handleChange} />
      <div className="text">
        第{start} - {end} 个房源，共超 {total} 个
      </div>
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
