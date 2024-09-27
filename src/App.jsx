import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import router from '@/route/index.js'
import Header from 'components/header/index.jsx'
import Footer from 'components/footer/index.jsx'
const App = memo(() => {
    return (
        <>
            <Header />
            {useRoutes(router)}
            <Footer />
        </>
    )
})

export default App
