import { memo, useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import router from '@/route/index.js'
import { useDispatch } from 'react-redux'
import { changeFixedAction, changeLucencyAction } from '@/store/modules/main.js'
import Header from 'components/header/index.jsx'
import Footer from 'components/footer/index.jsx'
const App = memo(() => {
    const location = useLocation()
    const dispatch = useDispatch()
    useEffect(() => {
        if (location.pathname === '/detail') {
            dispatch(changeFixedAction(false))
        } else {
            dispatch(changeFixedAction(true))
        }
        if (location.pathname === '/home') {
            dispatch(changeLucencyAction(true))
        } else {
            dispatch(changeLucencyAction(false))
        }
        window.scrollTo(0, 0)
    }, [location.pathname, dispatch])
    return (
        <>
            <Header />
            {useRoutes(router)}
            <Footer />
        </>
    )
})

export default App
