import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleListAction } from '@/store/modules/entire/createActions.js'
import List from './components/list/index.jsx'
import Filter from './components/filter'
import EntirePagination from './components/EntirePagination/index.jsx'
import { EntireWrapper } from './style'

const Entire = memo(() => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handleListAction())
    }, [dispatch])
    return (
        <EntireWrapper>
            <Filter />
            <List />
            <EntirePagination />
        </EntireWrapper>
    )
})

export default Entire
